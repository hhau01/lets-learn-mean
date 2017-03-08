import { authRouting } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogOutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        LogOutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}