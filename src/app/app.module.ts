import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase App
import { environment } from 'src/environments/environment';
//import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';


//Cloud Storage
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//
//import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { PerfilComponent } from './perfil/perfil.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [AppComponent],
 
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore],
  bootstrap: [AppComponent ],
})
export class AppModule {}