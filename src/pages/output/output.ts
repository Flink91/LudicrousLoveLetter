//too lazy to rename this from output to savedstories
import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StoryData } from '../../providers/story-data';

@Component({
  selector: 'page-output',
  templateUrl: 'output.html'
})
export class OutputPage {

  public hasData = false;
  public stories = [];

  constructor(public navCtrl: NavController, public storyData: StoryData, public storage: Storage, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.loadData();
    console.log("entered");
  }

  loadData() {
    this.storage.get('storyData').then((data) => {
      if (data != undefined) {
        console.log("got! in output " + JSON.stringify(data));
        this.hasData = true;

        console.log("was geht mit data: " + typeof (data));
        this.stories = data;
        console.log("stories array: " + JSON.stringify(this.stories));
      } else {
        this.hasData = false;
      }
    });

  }

  deleteStory(story) {
    console.log(story);

    //console.log(JSON.stringify(this.stories));
    console.log("Löschaktion: " + story);
    this.storyData.deleteData(story);

    //this.stories.splice(story, 1);

    //ngfor not updating...workaround
    setTimeout(() => {
      this.loadData();
    }, 200)

  }

  showConfirm(story) {
    let confirm = this.alertCtrl.create({
      title: 'Really delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteStory(story);
          }
        }
      ]
    });
    confirm.present();
  }

}
