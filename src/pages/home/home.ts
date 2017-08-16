import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private iab: InAppBrowser) {

  }

  openOpenload() {
    this.iab.create('http://olpair.com/', '_blank', {location: 'yes'});
  }

  openTheVideoMe() {
    this.iab.create('https://thevideo.me/pair', '_blank', {location: 'yes'});
  }
}
