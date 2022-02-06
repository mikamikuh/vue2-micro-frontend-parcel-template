# vue2-micro-frontend-parcel-template

## Overview

This repository explains the minimum setup to build single-spa parcel with Vue 2. It uses libraries below

- Vue 2
- single-spa
- single-spa-vue
- systemjs-webpack-interop
- SystemJS
- Webpack

### Shared libraries

The parcel is intended to share vendor libraries with other parcels or the host application. To share libraries, this project uses SystemJS.

`vue.config.js` has an `externals` configuration with `libraryTarget: 'system'`, which loads external libraries through SystemJS's import-map. The import-map is managed by the host application, which means the host application has a control where the libraries being loaded.

During development, `vue` has to be a part of chunk_vendors, not externals to use hot-reload and other development functionalities.

### Local development

#### Standalone

This project allows you to develop the parcel application without the host application. Simply `npm run serve` allows you to hit your localhost as you normally do in Vue development.

One difference is configuring `import-map`. Since parcel projects don't have a responsibility to manage import-map, you'll have to configure where the libraries come from. The development page has `{...}` button at the bottom right of the window, to configure all the import-maps.

In this project, you'll have to update override URLs with:

- `single-spa-vue`: https://cdn.jsdelivr.net/npm/single-spa-vue@2.5.1/dist/umd/single-spa-vue.min.js
- `single-spa`: https://cdn.jsdelivr.net/npm/single-spa/lib/system/single-spa.dev.js

#### Integration

To test the parcel with the host application, run `npm run serve:integration` command, which builds all the assets and place under `dist` folder, and serves by `http-server` command. (the http-server works wtih a node version more than 14)

Then, go back to the host application to set the `app.js` URL in the import-map override, and load the parcel.
