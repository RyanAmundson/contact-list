// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var firebaseConfig = {
  apiKey: "AIzaSyCdv-uQdFNf9KRVoAX5AFNjlkFfP0FQPqE",
  authDomain: "contact-list-d8ff6.firebaseapp.com",
  databaseURL: "https://contact-list-d8ff6.firebaseio.com",
  projectId: "contact-list-d8ff6",
  storageBucket: "contact-list-d8ff6.appspot.com",
  messagingSenderId: "934672668587",
  appId: "1:934672668587:web:ff3b3837db9530888164ee"
};

export const environment = {
  ...firebaseConfig,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
