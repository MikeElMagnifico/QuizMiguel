import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';
import { LampPage } from '../lamp/lamp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina = BocinaPage;
  tv = TvPage;
  smart = SmartPage;
  lam = LampPage;
  constructor(public navCtrl: NavController) {

  }
  Bocina()
  {
    this.navCtrl.push(this.bocina);
  }
  TV()
  {
    this.navCtrl.push(this.tv);
  }
  Lampara()
  {
    this.navCtrl.push(this.lam);
  }
  Smartphone()
  {
    this.navCtrl.push(this.smart);
  }

}
