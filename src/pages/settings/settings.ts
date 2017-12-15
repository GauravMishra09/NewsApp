import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    category: any;
    limit: any;
    language: any;
    country: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.getDefaults();
    }


    getDefaults() {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
        }
        else {
            this.category = 'general';
        }

        if (localStorage.getItem('limit') != null) {
            this.limit = localStorage.getItem('limit');
        }
        else {
            this.limit = 10;
        }

        if (localStorage.getItem('language') != null) {
            this.language = localStorage.getItem('language');
        }
        else {
            this.language = 'en';
        }

        if (localStorage.getItem('country') != null) {
            this.country = localStorage.getItem('country');
        }
        else {
            this.country = ' ';
        }
    }

    setDefaults() {
        localStorage.setItem('category', this.category);
        localStorage.setItem('limit', this.limit);
        localStorage.setItem('limit', this.language);
        localStorage.setItem('country', this.country);
        this.navCtrl.push(NewsPage);
    }

}
