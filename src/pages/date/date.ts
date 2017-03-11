import { Component } from '@angular/core';
import { StoryData } from '../../providers/story-data';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Date page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-date',
  templateUrl: 'date.html'
})
export class DatePage {

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
  myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public storyData: StoryData) {

    this.pluralnoun1 = navParams.get('param1');
    this.adverb1 = navParams.get('param2');
    this.verb1 = navParams.get('param3');
    this.clothing1 = navParams.get('param4');
    this.bodypart1 = navParams.get('param5');
    this.adjective1 = navParams.get('param6');
    this.noun1 = navParams.get('param7');
    this.pluralnoun2 = navParams.get('param8');
    this.bodypart2 = navParams.get('param9');
    this.pluralnoun3 = navParams.get('param10');
    this.bodypart3 = navParams.get('param11');
    this.noun2 = navParams.get('param12');
    this.noun3 = navParams.get('param13');
    this.ingword1 = navParams.get('param14');
    this.adjective2 = navParams.get('param15');
    this.adjective3 = navParams.get('param16');
    this.verb2 = navParams.get('param17');

  }

  ionViewDidLoad() {
    this.storyData.saveData({
      title: 'How to get a Date',
      date: this.myDate,
      inputs: this.navParams
    });
  }

}
