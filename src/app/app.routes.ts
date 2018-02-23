import { Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { AuthGuard } from './guards/auth/auth.guard';

export const appRoutes: Routes = [
    {path: "", component: WelcomeComponent, pathMatch: "full" },
    {path: "archives", component: ArchivesComponent,canActivate: [AuthGuard] },
]