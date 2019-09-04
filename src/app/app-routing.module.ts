import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MastersComponent } from './masters/masters.component';
import { SlamsComponent } from './slams/slams.component';

const routes: Routes = [
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

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
