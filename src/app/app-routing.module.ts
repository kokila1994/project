import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './leftnav/createaccount/createaccount.component';
import { HomeComponent } from './leftnav/home/home.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { LoginComponent } from './leftnav/login/login.component';


const routes: Routes = [
  {path: 'leftnav', component:LeftnavComponent },
  {path: 'home',  component: HomeComponent },
  {path: 'createaccount', component: CreateaccountComponent}, 
  { path: 'login',component: LoginComponent }
     
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
