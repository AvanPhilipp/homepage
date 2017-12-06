import { GrandSecretComponent } from './components/grand-secret/grand-secret.component';
import { SecretComponent } from './components/secret/secret.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes =[
    { path:"", component: WelcomeComponent, pathMatch: 'full' },
    { path:"login", component: LoginComponent },
    { path:"secret", component: SecretComponent },
    { path:"grand-secret", component: GrandSecretComponent }

  ]