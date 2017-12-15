import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService {
    http: any;
    baseUrl: String;
    apiKey: string = '46afddeb52e4485e82bed7591ea8033e';
    

    constructor(private _http: HttpClient) {
        this.baseUrl = 'https://newsapi.org/v2/top-headlines';

    }

    getPost(category, limit, language, country) {
        console.log(this.baseUrl + '?category=' + category + '&country=in' + '&language=' + language + '&apiKey=' + this.apiKey);
        if (category == 'general') {
            return this._http.get(this.baseUrl + '?category=' + category + '&country=' + country + '&language=' + language + '&apiKey=' + this.apiKey).map(res => res);
        }
        else {
            return this._http.get(this.baseUrl + '?category=' + category + '&language=' + language + '&apiKey=' + this.apiKey).map(res => res);
        }
    }
}