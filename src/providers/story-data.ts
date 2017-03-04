import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class StoryData {
  public data: any;
  public stories = [];

  constructor(public storage: Storage) { }

  saveData(inputData) {

    this.storage.get('storyData').then((data) => {
      console.log(typeof(data));
      console.warn("1. GOT: " + JSON.stringify(data));
      if (data != null){this.stories = data;}
      this.stories.push(inputData);
      console.warn("2. NACH PUSH: " + JSON.stringify(this.stories));

      this.storage.set('storyData', this.stories);
      console.warn("3. NACH SET: " + JSON.stringify(this.stories));

    });

  }

  deleteData(inputData) {

    this.storage.get('storyData').then((data) => {
      console.log(typeof(data));
      console.warn("1. GOT: " + JSON.stringify(data));

      this.stories = data;
      this.stories.splice(inputData, 1);
      console.warn("2. NACH SPLICE: " + JSON.stringify(this.stories));

      this.storage.set('storyData', this.stories);
      console.warn("3. NACH SET: " + JSON.stringify(this.stories));

    });

  }
}
