import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      animated: false,
      showCloseButton: true,
      closeButtonText: 'hide',
      position: 'middle',
      color: 'dark',
    });
    toast.present();
    toast.onDidDismiss().then((val) => {
      console.log('toast dismissed');
    });
  }

}
