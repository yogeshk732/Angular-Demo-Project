import { Routes, Router } from '@angular/router';
import { LoggedInAuthGuardService as LoggedInAuthGuard } from '@services/auth/loggedin-auth-guard.service';

export const routesUrl: Routes = [
  {
    path: '',
    loadChildren: '../components/home/home.module#HomeModule'
  }
];