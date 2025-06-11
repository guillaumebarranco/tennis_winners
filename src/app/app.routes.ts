import { Routes } from '@angular/router';
import { SlamsComponent } from './slams/slams.component';
import { MastersComponent } from './masters/masters.component';

export const routes: Routes = [
    {
    component: SlamsComponent,
    path: 'slams',
  },
  {
    component: MastersComponent,
    path: 'masters',
  },
  {
    component: SlamsComponent,
    path: '',
  },
];
