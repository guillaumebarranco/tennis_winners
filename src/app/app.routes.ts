import { Routes } from '@angular/router';
import { SlamsOverTimeComponent } from './containers/slams-over-time/slams-over-time.component';
import { MastersOverTimeComponent } from './containers/masters-over-time/masters-over-time.component';
import { SlamsComponent } from './containers/slams/slams.component';
import { MastersComponent } from './containers/masters/masters.component';

export const routes: Routes = [
    {
    component: SlamsOverTimeComponent,
    path: 'slams-over-time',
  },
  {
    component: MastersOverTimeComponent,
    path: 'masters-over-time',
  },
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
