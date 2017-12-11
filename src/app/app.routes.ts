import { SecretComponent } from './components/secret/secret.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: "", component: WelcomeComponent, pathMatch: "full" },
    {path: "appletree", component: SecretComponent }
]