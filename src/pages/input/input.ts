import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoveletterPage } from '../loveletter/loveletter';

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input',
  templateUrl: 'input.html'
})
export class InputPage {
  outputPage = LoveletterPage;

  name1 = '';
  name2 = '';
  adjective1 = '';
  verb1 = '';
  bodypart1 = '';
  number1 = '';
  noun1 = '';
  adverb1 = '';
  verb2 = '';
  pronoun1 = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  createLetter() {
    this.navCtrl.push(LoveletterPage, {
      param1: this.name1, param2: this.name2, param3: this.adjective1, param4: this.verb1, param5: this.bodypart1, param6: this.number1, param7: this.noun1, param8: this.adverb1, param9: this.verb2, param10: this.pronoun1
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
