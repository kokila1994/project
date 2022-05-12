import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftnavRoutingModule } from './leftnav-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateaccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LeftnavRoutingModule
  ]
})
export class LeftnavModule { }
