// import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { AngularFireModule } from "angularfire2";
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from './app.component';
// import { FooterComponent } from './parts/footer/footer.component';
// import { HeaderComponent } from './parts/header/header.component'
// import { FooterComponent } from './parts/footer/footer.component';
// import { LoginComponent } from './components/login/login.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';
// import { SecretComponent } from './components/secret/secret.component';
// import { GrandSecretComponent } from './components/grand-secret/grand-secret.component'
// import { environment } from '../environments/environment';

// import { SecretService } from "./components/secret/secret.service";
// import { FirebaseService } from "./services/firebase/firebase.service";


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // LoginComponent,
    // WelcomeComponent,
    // SecretComponent,
    // GrandSecretComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    // AngularFontAwesomeModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [
    // SecretService
  ],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule { }
