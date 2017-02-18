import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Loveletter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pillowfight',
  templateUrl: 'pillowfight.html'
})
export class PillowFightPage {
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.adjective1 = navParams.get('param1');
    this.personInRoom1 = navParams.get('param2');
    this.adjective2 = navParams.get('param3');
    this.noun1 = navParams.get('param4');
    this.bodypart1 = navParams.get('param5');
    this.noun2 = navParams.get('param6');
    this.personInRoom2 = navParams.get('param7');
    this.bodypart2 = navParams.get('param8');
    this.noun3 = navParams.get('param9');
    this.noun4 = navParams.get('param10');
    this.adjective3 = navParams.get('param11');
    this.timeSpan1 = navParams.get('param12');
    this.adjective4 = navParams.get('param13');
    this.adjective5 = navParams.get('param14');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillowFightPage');
  }

}
