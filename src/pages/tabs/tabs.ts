import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = NewsPage;
    tab2Root = SettingsPage;
    tab3Root = AboutPage;

    constructor() {

    }
}
