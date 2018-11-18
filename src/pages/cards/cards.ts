import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/CODESPARXIM/xpressologo.png',
          name: 'Farm1'
        },
        date: 'District C, Delta City',
        image: '/assets/img/CODESPARXIM/photo-1533268722164-c7323ba5690c.jpeg',
        content: 'Description',
      },
      {
        user: {
          avatar: 'assets/img/CODESPARXIM/xpressologo.png',
          name: 'Farm2'
        },
        date: 'Block C, Alpha City',
        image: 'assets/img/CODESPARXIM/photo-1523036965917-9f39af7fac46.jpeg',
        content: 'Description'
      },
      {
        user: {
          avatar: 'assets/img/CODESPARXIM/xpressologo.png',
          name: 'Farm3'
        },
        date: 'Building A, Beta City',
        image: 'assets/img/CODESPARXIM/photo-1523036713639-15f853a8fa89.jpeg',
        content: 'Description'
      }
    ];

  }
}
