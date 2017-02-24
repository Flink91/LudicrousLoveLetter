import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StoryData } from '../../providers/story-data';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public hasData = false;
  public stories = [];

  constructor(public navCtrl: NavController, public storyData: StoryData, public storage : Storage) {
  }

  ionViewDidLoad(){
    this.loadData();
  }

  loadData(){
    this.storage.get('storyData').then((data) => {
      console.log("got! in contact " + JSON.stringify(data));
      if(data) this.hasData = true;
      this.stories = JSON.parse(data);
      console.log("stories array: " + this.stories);
    });

  }


  addStory(){

  }

}
