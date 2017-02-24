import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InputPage } from '../pages/input/input';
import { Input2Page } from '../pages/input2/input2';
import { LoveletterPage } from '../pages/loveletter/loveletter';
import { PillowFightPage } from '../pages/pillowfight/pillowfight';
import { StoryData } from '../providers/story-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InputPage,
    Input2Page,
    LoveletterPage,
    PillowFightPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InputPage,
    Input2Page,
    LoveletterPage,
    PillowFightPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StoryData, Storage]
})
export class AppModule {}
