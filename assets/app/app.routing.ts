import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
// /auth or /messages etc
    { path: '', redirectTo: 'messages', pathMatch: 'full'},
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }

];
    
export const routing = RouterModule.forRoot(APP_ROUTES);