import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
