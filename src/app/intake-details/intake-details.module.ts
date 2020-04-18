import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntakeDetailsPageRoutingModule } from './intake-details-routing.module';

import { IntakeDetailsPage } from './intake-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntakeDetailsPageRoutingModule
  ],
  declarations: [IntakeDetailsPage]
})
export class IntakeDetailsPageModule {}
