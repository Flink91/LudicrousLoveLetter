import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PillowFightPage } from '../pillowfight/pillowfight';

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input',
  templateUrl: 'input2.html'
})
export class Input2Page {
  outputPage = PillowFightPage;

  adjective1 = '';
  personInRoom1 = '';
  adjective2 = '';
  noun1 = '';
  bodypart1 = '';
  noun2 = '';
  personInRoom2 = '';
  bodypart2 = '';
  noun3 = '';
  noun4 = '';
  adjective3 = '';
  timeSpan1 ='';
  adjective4 = '';
  adjective5 ='';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  createText() {
    this.navCtrl.push(PillowFightPage, {
      param1: this.adjective1,
      param2: this.personInRoom1,
      param3: this.adjective2,
      param4: this.noun1,
      param5: this.bodypart1,
      param6: this.noun2,
      param7: this.personInRoom2 ,
      param8: this.bodypart2,
      param9: this.noun3,
      param10: this.noun4,
      param11: this.adjective3,
      param12: this.timeSpan1,
      param13: this.adjective4,
      param14: this.adjective5
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
