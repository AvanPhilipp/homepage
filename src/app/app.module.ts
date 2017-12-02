import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component'
import { FooterComponent } from './parts/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SecretComponent } from './components/secret/secret.component';
import { GrandSecretComponent } from './components/grand-secret/grand-secret.component'

export const firebaseConfig = {
  apiKey: "AIzaSyDFOJTQY6vc6hrUQnOHdJDXuupZUWB9C5Q",
  authDomain: "fealoce-homepage.firebaseapp.com",
  databaseURL: "https://fealoce-homepage.firebaseio.com",
  projectId: "fealoce-homepage",
  storageBucket: "",
  messagingSenderId: "661369676577"
};
// firebase.initializeApp(config);

const appRoutes: Routes =[
  { path:"", component: WelcomeComponent, pathMatch: 'full' },
  { path:"login", component: LoginComponent },
  { path:"secret", component: SecretComponent },
  { path:"grand-secret", component: GrandSecretComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    SecretComponent,
    GrandSecretComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
