import { MessageModule } from './messages/message.module';
import { ErrorService } from './errors/error.service';
import { ErrorComponent } from './errors/error.component';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { LogOutComponent } from './auth/logout.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogOutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}