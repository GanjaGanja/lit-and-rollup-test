## Test project to play with Lit components and Rollup
Test project to play with Lit components and Rollup. Basic [rollup-starter-app](https://github.com/rollup/rollup-starter-app/) was used to configure Rollup.

## Getting started
```bash
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License
[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).