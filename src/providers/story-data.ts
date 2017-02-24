import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class StoryData {
  public data: any;
  public stories = [];

  constructor(public storage: Storage) { }

  saveData(data){

    this.storage.get('storyData').then((data) => {
      console.log("got! in contact " + JSON.stringify(data));
    });
    this.stories.push(data);
    let newData = JSON.stringify(this.stories);
    this.storage.set('storyData', newData);
    console.log("setting");
  }
}
