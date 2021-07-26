import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ItemComponent } from './item/item.component';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
