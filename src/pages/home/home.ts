import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InputPage } from '../input/input';
import { Input2Page } from '../input2/input2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputPage = InputPage;
  input2Page = Input2Page;

  constructor(public navCtrl: NavController) {

    //this.pushPage = InputPage;
  }

}
