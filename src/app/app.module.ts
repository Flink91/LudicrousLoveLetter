import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { OutputPage } from '../pages/output/output';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InputPage } from '../pages/input/input';
import { Input2Page } from '../pages/input2/input2';
import { Input3Page } from '../pages/input3/input3';
import { DatePage } from '../pages/date/date';
import { LoveletterPage } from '../pages/loveletter/loveletter';
import { PillowFightPage } from '../pages/pillowfight/pillowfight';
import { StoryData } from '../providers/story-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    OutputPage,
    HomePage,
    InputPage,
    Input2Page,
    Input3Page,
    DatePage,
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
    OutputPage,
    HomePage,
    InputPage,
    Input2Page,
    Input3Page,
    DatePage,
    LoveletterPage,
    PillowFightPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StoryData, Storage]
})
export class AppModule {}
