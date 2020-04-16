import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit {

  constructor(private alertController: AlertController, 
             private router: Router) { }

  async confirmLogout() {
    const alert = await this.alertController.create({
        header: 'Logout Confirmation' ,
        message: "<strong>Are you sure you want to logout?</strong>",
        buttons: [
            {
                text: "Cancel",
                role: 'cancel',
                cssClass: 'secondary'
            },
            {
                text: "Yes",
                handler: () => {
                    this.router.navigate(['login/']);
                }
            },
        
        
        ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
