import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manage-data',
    templateUrl: './manage-data.page.html',
    styleUrls: ['./manage-data.page.scss'],
})
export class ManageDataPage implements OnInit {

    disable_cloud:boolean = true;


    constructor() { }

    ngOnInit() {
    }

    changeCloudSettings() {
        this.disable_cloud = !this.disable_cloud;
        console.log("here")
    }



}
