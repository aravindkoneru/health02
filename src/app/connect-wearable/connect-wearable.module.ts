import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectWearablePageRoutingModule } from './connect-wearable-routing.module';

import { ConnectWearablePage } from './connect-wearable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectWearablePageRoutingModule
  ],
  declarations: [ConnectWearablePage]
})
export class ConnectWearablePageModule {}
