import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InputPage } from '../input/input';
import { Input2Page } from '../input2/input2';
import { Input3Page } from '../input3/input3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputPage = InputPage;
  input2Page = Input2Page;
  input3Page = Input3Page;

  constructor(public navCtrl: NavController) {

    //this.pushPage = InputPage;
  }

}
