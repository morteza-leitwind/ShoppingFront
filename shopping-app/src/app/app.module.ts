import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicesService } from './services.service';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserModule

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
