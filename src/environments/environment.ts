// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  headers: {
		'X-RapidAPI-Key': 'b15905d8a4msh8f1cc0a31f0f9b2p1344d0jsnbb6eb3bb1871',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	},
  url: 'https://bestweather.p.rapidapi.com/weather/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
