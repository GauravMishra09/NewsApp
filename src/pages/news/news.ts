import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/Services/newsService';
import { NewsDetailsPage } from '../news-details/news-details'



@IonicPage()
@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {

    items: any;
    category: any;
    limit: any;
    language: any;
    country: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _service: NewsService) {
        this.getDefaults();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewsPage');
    }

    ngOnInit() {

        this.getNews(this.category, this.limit,this.language);
    }



    getNews(category, limit, language, country) {
        this._service.getPost(category, limit, language, country).subscribe(response => {
            console.log(response);
            this.items = response.articles;
        });
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

    changeCategory(category) {
        this.getNews(this.category, this.limit,this.language,this.country);

    }

    viewItem(item) {
        this.navCtrl.push(NewsDetailsPage, { item: item })
    }

}
