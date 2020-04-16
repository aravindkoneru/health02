import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

export class Tab5Page implements OnInit {

  constructor(private alertController: AlertController) { }

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
                    //TODO: Who ever is doing the login screen needs to re-route
                    // to the login screen.
                    console.log("user wants to log out");
                }
            },
        
        
        ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
