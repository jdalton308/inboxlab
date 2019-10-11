# Inboxlab Assessment

Hosted at <https://inboxlab.firebaseapp.com/>



## Running locally

To run locally, first install dependencies...

```bash
npm i
```

...then start the development server, which will watch all project files for changes, and rebuild and reload when they occur. By default, the local server serves the files from `localhost:8080`:

```bash
npm run dev
```



## Tools Used

- [Vue.js](https://vuejs.org/) - Used as a front-end JavaScript framework
- [Vue CLI](https://cli.vuejs.org/) - Used to quickly scaffold the project, provides a local dev server and build script, and allows the use of ".vue" files, which contain an HTML template, the JavaScript, and Sass for a component
- Sass - As a CSS pre-processor
- Babel - Built into the Vue-CLI webpack build process
- [Firebase](https://firebase.google.com) - Used as a static site host



## File Structure

All project files are located with `/src` and `/public`/, while most other files are configuration files for build tools.

- `/public` - contains the `index.html` that recieves the apps JavaScript references, and any other files added to this folder are simply copied over to the built `/dist` folder
- `/src/` - contains all app files
  - `main.js` - Bootstraps the Vue app on the page
  - `App.vue` - The "most senior" parent Vue component of the app. Loaded by the Vue init function in `main.js`
  - `/components/` - Contains all the Vue components for the app
  - `/scss/` - Contains the app's Sass variables, any global or shared styles, which are added through the `App.vue` file
  - `/utils/` - Any shared functions



## Deployment

The app is configured to be hosted on Firebase, and an npm script was added to make deployment simple.  Just run the following to deploy updates:

```bash
npm run deploy
```