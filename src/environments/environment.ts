// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBl5XT8UvZBZA5lsx9Nid1FJY61AdoLsTg",
    authDomain: "todolistapp-5abf9.firebaseapp.com",
    databaseURL: "https://todolistapp-5abf9.firebaseio.com",
    projectId: "todolistapp-5abf9",
    storageBucket: "todolistapp-5abf9.appspot.com",
    messagingSenderId: "240778656425"
  }
};
