import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import { getFirestore, provideFirestore} from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyCTChXghrrk6eZvh1XXKCR_q34wQQK1Luc",
    authDomain: "instaclone-73f6e.firebaseapp.com",
    projectId: "instaclone-73f6e",
    storageBucket: "instaclone-73f6e.appspot.com",
    messagingSenderId: "870836869693",
    appId: "1:870836869693:web:b056b93a61857d3a13e854"
  })),
  provideFirestore(() => getFirestore())
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
