import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { SkyWait } from './sky-wait/sky-wait';
import { Cat } from './cat/cat';
import { Joy } from './joy/joy';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'sky', component: SkyWait },
  { path: 'cat', component: Cat },
  { path: 'joy', component: Joy },
];
