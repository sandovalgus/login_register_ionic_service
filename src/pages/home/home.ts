import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

// import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logoutme() {
    //this.navCtrl.push(WelcomePage);
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
