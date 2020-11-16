import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    AngularFireModule.initializeApp({
      projectId: environment.projectId,
      apiKey: environment.apiKey,
      authDomain: environment.authDomain,
      databaseURL: environment.databaseURL,
      storageBucket: environment.storageBucket,
      messagingSenderId: environment.messagingSenderId,
    }),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
