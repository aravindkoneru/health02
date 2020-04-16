import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialCollectionPageRoutingModule } from './initial-collection-routing.module';

import { InitialCollectionPage } from './initial-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialCollectionPageRoutingModule
  ],
  declarations: [InitialCollectionPage]
})
export class InitialCollectionPageModule {}
