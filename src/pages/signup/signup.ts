import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { WelcomePage } from '../welcome/welcome';
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  register: FormGroup;

  constructor(    public navCtrl: NavController, 
                  public navParams: NavParams, 
                  public authService: AuthServiceProvider,
                  public formBuilder: FormBuilder) {

                  this.register = this.createMyForm();
                  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

      private createMyForm(){
      return this.formBuilder.group({

          name: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          
        });
      }



  signup() {
      console.log(this.register.value);
    // this.navCtrl.push(TabsPage);
        this.authService.register(this.register.value)
              .subscribe(
                    data => {console.log(data);
                      
                    },
                    err=> {console.log(err);}
              );
  }



     // enviar() {
     //  console.log(this.cadastro.value);
     //    this.http.postCampana(this.cadastro.value)
     //          .subscribe(
     //                data => {console.log(data);
     //                    this.showAlert('excelente');
     //                    this.navCtrl.setRoot(MisCampanasPage);
     //                      // this.getDados();      
     //                },
     //                err=> {console.log(err);}
     //          );
     //  }
     
}
