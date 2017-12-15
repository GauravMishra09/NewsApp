import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsService } from '../app/Services/newsService';
import { NewsDetailsPage } from '../pages/news-details/news-details'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        SettingsPage,
        NewsPage,
        NewsDetailsPage,
        TabsPage
    ],
    imports: [
        BrowserModule, HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        SettingsPage,
        NewsPage,
        NewsDetailsPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen, NewsService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
