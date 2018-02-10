import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from "../welcome/welcome";
import { TabsPage } from '../tabs/tabs';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ingreso: FormGroup;
  constructor(    public navCtrl: NavController, 
                  public navParams: NavParams,
                  public authService: AuthServiceProvider,
                  public formBuilder: FormBuilder) {
                   this.ingreso = this.createMyForm();
                   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

      private createMyForm(){
        return this.formBuilder.group({

            
            email: ['', Validators.required],
            password: ['', Validators.required],
            
          });
        }


  signin(){
     console.log(this.ingreso.value);
    // this.navCtrl.push(TabsPage);
     this.authService.login(this.ingreso.value)
              .subscribe(
                    data => {console.log(data);
                      
                    },
                    err=> {console.log(err);}
              );
  }
} 
