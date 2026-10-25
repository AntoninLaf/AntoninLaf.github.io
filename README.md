# antoninlaf.github.io

My field notebook: the problems I've worked on, drawn and written by hand.
Live at [antoninlaf.github.io](https://antoninlaf.github.io).

## How it's built

Plain HTML, CSS and JavaScript. No framework, no build step. GitHub Pages serves the folder as is.

```
index.html            the shell: top bar, sheet host, the ask panel
css/ink.css           the Ink & Paper design system
js/app.js             router (hash-based), language switch, page transitions
js/i18n.js            shared EN/FR strings
js/spiral.js          the opening: every project as a notebook page on a spiral binding, turned by scrolling
js/map.js             the same work drawn as a map (#/map)
js/pages.js           home, about, project page renderers
projects/index.js     the project registry
projects/<slug>/      one folder per project: index.js (text EN/FR, links, map position, landmark drawing) and story.js (the world: sections, drawings, any interactive piece)
stories/<slug>.js     one file per About story: text (EN/FR), numbers, a hand-drawn diagram
js/ink.js             inking helpers: figures that draw themselves on scroll, hand-drawn tallies
```

## Adding a project

1. Copy any folder under `projects/` to `projects/<slug>/`.
2. Fill in `text` (EN and FR), `links`, `kind` (the line above the title on the spiral, EN and FR), `tags` (`ai`, `product`, `marketing`: the spiral's filters), `map` (where it sits on the 1200×660 map; `noteSide` is `right`, `left` or `above`, for the hover note) and `landmark` (a small ink drawing, ground line at y=0).
3. Add one import line and one entry in `projects/index.js`.
4. Optional: a `story.js` exporting `render(project, lang, t)` for the full world, and `mount(root, lang)` for anything interactive. Without it, the project gets a simple page from its `lede`.

The spiral, its filters and counter, the map, the route and the navigation update on their own. An About case joins the spiral too once its file has a `landmark`, `org`, `spot`, `kind` and `tags` (see `stories/stekar.js`).

## Adding a story

Copy any file under `stories/`, fill in the text, the tallies and the diagram, and add it to `stories/index.js`. The About index, the page numbers and the next-story links update on their own.

## Running locally

Any static server works, for example `python3 -m http.server 8000`, then open `http://localhost:8000`.

## The social preview card
`assets/og.png` is rendered from `tools/og-card.html` (open it from the site root, e.g. `http://localhost:8123/tools/og-card.html`, and screenshot at 1200×630). It reuses the project landmarks, so it changes when the map does.
