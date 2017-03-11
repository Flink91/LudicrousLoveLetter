import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePage } from '../date/date';

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input',
  templateUrl: 'input3.html'
})
export class Input3Page {
  outputPage = DatePage;

  pluralnoun1 = '';
  adverb1 = '';
  verb1 = '';
  clothing1 = '';
  bodypart1 = '';
  adjective1 = '';
  noun1 = '';
  pluralnoun2 = '';
  bodypart2 = '';
  pluralnoun3 = '';
  bodypart3 = '';
  noun2 = '';
  noun3 = '';
  ingword1 = '';
  adjective2 = '';
  adjective3 = '';
  verb2 = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  createText() {
    this.navCtrl.push(DatePage, {
      param1: this.pluralnoun1,
      param2: this.adverb1,
      param3: this.verb1,
      param4: this.clothing1,
      param5: this.bodypart1,
      param6: this.adjective1,
      param7: this.noun1 ,
      param8: this.pluralnoun2,
      param9: this.bodypart2,
      param10: this.pluralnoun3,
      param11: this.bodypart3,
      param12: this.noun2,
      param13: this.noun3,
      param14: this.ingword1,
      param15: this.adjective2,
      param16: this.adjective3,
      param17: this.verb2
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Input3Page');
  }

}
