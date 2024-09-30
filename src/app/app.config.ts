import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { effectsArray } from './store/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducers),
    provideEffects(effectsArray),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ],
};
function provideStoreDevtools(arg0: {
  maxAge: number; // Retains last 25 states
  logOnly: boolean; // Restrict extension to log-only mode
  autoPause: boolean; // Pauses recording actions and state changes when the extension window is not open
  trace: boolean; //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
  traceLimit: number; // maximum stack trace frames to be stored (in case trace option was provided as true)
  connectInZone: boolean; // If set to true, the connection is established within the Angular zone
}): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

