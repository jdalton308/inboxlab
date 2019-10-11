# Inboxlab Assessment


## Running locally

To run locally, first install dependencies...
```bash
npm i
```

then start the development server
```bash
npm run dev
```


## File Structure

All project files are located with `/src`. Within `/src`, `main.js` bootstraps the Vue app, using `App.vue` as the parent component for the entire app. The few other components used within the app are located within `/src/components`.

Styles are all written in Sass (.scss), and any styles specific to a component are located in that appropriate .vue file. Any shared styles or variables are found in `/src/scss/`.

Shared functions are found `/src/utils/`.