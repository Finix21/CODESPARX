import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
public navCtrl: NavController;
public alertCtrl: AlertController;
 
  /*prC: presentConfirm = new presentConfirm();*/
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }
  constructor(public alertCtrl: AlertController) {}
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Your In App Purchase',
    message: '',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Purchase',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}
}
