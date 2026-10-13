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
js/map.js             draws the home map from the project registry
js/pages.js           home, about, project page renderers
projects/index.js     the project registry
projects/<slug>/      one folder per project: text (EN/FR), links, map position, landmark drawing
```

## Adding a project

1. Copy any folder under `projects/` to `projects/<slug>/`.
2. Fill in `text` (EN and FR), `links`, `map` (where it sits on the 1200×620 map) and `landmark` (a small ink drawing, ground line at y=0).
3. Add one import line and one entry in `projects/index.js`.

The map, the route and the navigation update on their own.

## Running locally

Any static server works, for example `python3 -m http.server 8000`, then open `http://localhost:8000`.
