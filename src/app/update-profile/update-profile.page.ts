import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.page.html',
    styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

    constructor(private alertController: AlertController,
                private router: Router) {
    }

    ngOnInit() {

    }

    redoMeasurements() {
        this.router.navigate(['initial-collection/']);
    }

    async changePassword() {
        const alert = await this.alertController.create({
            header: 'Change Password' ,
            inputs: [
                {
                    name: 'current_password',
                    type: 'text',
                    placeholder: 'Enter current password'
                },
                {
                    name: 'new_password',
                    type: 'text',
                    placeholder: 'Enter new password'
                }, 
                {
                    name: 'confirm_password',
                    type: 'text',
                    placeholder: 'Confrim new password'
                } 
            
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    cssClass: 'secondary'
                },
                {
                    text: "Confirm",
                    handler: () => {
                        this.presentConfirmation();
                    },
                },
            ]
        });

        await alert.present();
    }

    async presentConfirmation() {
        const confirm = await this.alertController.create({
            header: 'Change Password',
            message: 'Password successfully changed!',
            buttons: ['Ok'] 
        });

        await confirm.present();
    }
}
