import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("this");
  }

  updateProfileClicked() {
      console.log("update profile");
  }

  connectWearableClicked() {
      console.log("connect wearable");
  }

  manageDataClicked() {
      console.log("manage data");
  }

  privacyPolicyClicked() {
      console.log("privacy policy");
  }

}
