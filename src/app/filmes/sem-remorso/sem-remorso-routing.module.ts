import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemRemorsoPage } from './sem-remorso.page';

const routes: Routes = [
  {
    path: '',
    component: SemRemorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemRemorsoPageRoutingModule {}
