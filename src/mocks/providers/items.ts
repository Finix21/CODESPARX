import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Brewed Coffee",
    "profilePic": "assets/img/CODESPARXIM/brewedcoffee.jpeg",
"def":"Coffee, but brewed.",
    "about0": "Grams: 20",
    "about1": "Ellipsis Coffee"
  };


  constructor() {
    let items = [
      {
        "name": "Caffe Americano",
        "profilePic": "assets/img/CODESPARXIM/caffeamericanocoffee.jpg",
"def":"Espresso diluted with hot water, coz diluting it with cold would be a hard one."        
,"about": "Grams: 20",
	"about1": "Ellipsis Coffee"
      },
      {
        "name": "Cold Brew",
        "profilePic": "assets/img/CODESPARXIM/coldbrew.jpg",
	"def":"Brewed by the absence of heat.",
        "about": "Grams: 15",
	"about1": "Nescafe"
      },
      {
        "name": "Espresso",
        "profilePic": "assets/img/CODESPARXIM/espressocoffee.jpeg",
"def":"Strong, thick black coffee, doesn't sound right.",        
"about": "Grams: 20",
	"about1": "Figaro"
      },
           {
        "name": "Frappe Coffee",
        "profilePic": "assets/img/CODESPARXIM/frappecoffee.jpg",
"def":"Espresso with milk foam, simply a 2-hour drink for millenials.",        
"about": "Grams: 15"
      },
      {
        "name": "Caffe Mocha",
        "profilePic": "assets/img/CODESPARXIM/caffemochacoffee.jpg",
"def":"Espresso with chocolate syrup, steamed milk and whipped cream.",       
 "about": "Grams: 30",
	"about1": "Nescafe"
      },
      {
        "name": "Cappucino",
        "profilePic": "assets/img/CODESPARXIM/cappuccinocoffee2.jpg",
"def":"Espresso with steamed milk and foam. Basically its Caffe Mocha minus chocolate and cream.",
        "about": "Grams: 15",
	"about1": "Figaro"
      },
	{
        "name": "Flat White",
        "profilePic": "assets/img/CODESPARXIM/flatwhitecoffee2.jpg",
"def":"Espresso with steamed milk only.",
"about": "Grams: 20",
	"about1": "Nescafe"
      },
	{
        "name": "Doppio",
        "profilePic": "assets/img/CODESPARXIM/doppiocoffee.jpg",
"def":"It's Dope - Yow.",        
"about": "Grams: 10",
	"about1": "Ellipsis Coffee"
      },
	{
        "name": "Iced Coffee",
        "profilePic": "assets/img/CODESPARXIM/icedcoffee.jpg",
"def":"coffee that’s been chilled with ice cubes. What else do you think?!",        
"about": "Grams: 20",
	"about1": "Figaro"
      },
	{
        "name": "Iced Coffee with Milk",
        "profilePic": "assets/img/CODESPARXIM/icedcoffeemilk.jpg",
"def": "What its name says.",       
 "about": "Grams: 15",
	"about1": "Figaro"
      },
	{
        "name": "Milk Coffee",
        "profilePic": "assets/img/CODESPARXIM/milkcoffee.png",
"def":"Coffee for babies at heart.",        
"about": "Grams: 30",
	"about1": "Nescafe"
      },
{
        "name": "Vanilla Latte",
        "profilePic": "assets/img/CODESPARXIM/vanilla latte.jpg",
        "def":"Coffee for bigger kids.",
"about": "Grams: 20",
	"about1": "Ellipsis Coffee"
      },
{
        "name": "Liberica",
        "profilePic": "assets/img/CODESPARXIM/liberica.jpg",
        "def":"Delicate and sweet.",
"about": "Nescafe"
      },
{
        "name": "Excelsa",
        "profilePic": "assets/img/CODESPARXIM/excelsa.jpg",
"def":"Sounds excellent.",        
"about": "Figaro"
      },
{
        "name": "Robusta",
        "profilePic": "assets/img/CODESPARXIM/robusta.jpg",
"def":"Low acidity and high bitterness. No other meaning intended.",        
"about": "Ellipsis Coffee"
      }	
    ];
    for (let item of items) {
      this.items.push(new Item(item));
    }

  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
