import { LogOutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogOutComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);