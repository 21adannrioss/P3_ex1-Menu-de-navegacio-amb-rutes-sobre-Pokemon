import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Aquí registrem les rutes a l'aplicació
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};