import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemRemorsoPageRoutingModule } from './sem-remorso-routing.module';

import { SemRemorsoPage } from './sem-remorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemRemorsoPageRoutingModule
  ],
  declarations: [SemRemorsoPage]
})
export class SemRemorsoPageModule {}
