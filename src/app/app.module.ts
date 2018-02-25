import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VeteriansComponent } from './veterians/veterians.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PetCellRenderer } from 'app/common/aggrid-cellrenderer/petCellRenderer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeteriansComponent,
    PetCellRenderer
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
