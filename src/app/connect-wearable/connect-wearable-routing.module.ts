import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectWearablePage } from './connect-wearable.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectWearablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectWearablePageRoutingModule {}
