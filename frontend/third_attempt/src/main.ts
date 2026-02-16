import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';
import { inject } from '@vercel/analytics';

// Initialize Swiper custom elements
register();

// Initialize Vercel Web Analytics
inject();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
