import { Component } from '@angular/core';
import { StoryData } from '../../providers/story-data';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Loveletter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loveletter',
  templateUrl: 'loveletter.html'
})
export class LoveletterPage {
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
  myDate: String = new Date().toISOString();


  constructor(public navCtrl: NavController, public navParams: NavParams, public storyData:StoryData) {
    this.name1 = navParams.get('param1');
    this.name2 = navParams.get('param2');
    this.adjective1 = navParams.get('param3');
    this.verb1 = navParams.get('param4');
    this.bodypart1 = navParams.get('param5');
    this.number1 = navParams.get('param6');
    this.noun1 = navParams.get('param7');
    this.adverb1 = navParams.get('param8');
    this.verb2 = navParams.get('param9');
    this.pronoun1 = navParams.get('param10');
  }

  ionViewDidLoad() {
    this.storyData.saveData({
      title : 'Love Letter',
      date : this.myDate,
      inputs : this.navParams
    });
  }

}
