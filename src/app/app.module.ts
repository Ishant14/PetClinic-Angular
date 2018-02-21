import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VeteriansComponent } from './veterians/veterians.component';
import {OwnerModule} from './owner/owner.module';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeteriansComponent
  ],
  imports: [
    BrowserModule,
    OwnerModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
