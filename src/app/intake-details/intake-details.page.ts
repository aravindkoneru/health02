import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-intake-details',
    templateUrl: './intake-details.page.html',
    styleUrls: ['./intake-details.page.scss'],
})
export class IntakeDetailsPage implements OnInit {

    //@ViewChild("calorieIntake", {static: true}) chartCanvas: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    newPeriod(event: any) {
        console.log(event);
    }

}
