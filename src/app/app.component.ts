import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { InputPage } from '../pages/input/input';
import { Input2Page } from '../pages/input2/input2';
import { Input3Page } from '../pages/input3/input3';
import { StoryData } from '../providers/story-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  InputPage = InputPage;
  Input2Page = Input2Page;
  Input3Page = Input3Page;


  constructor(platform: Platform, public storage: Storage, public storyData: StoryData) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
