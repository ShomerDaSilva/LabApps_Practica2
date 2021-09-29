import { Component, Output, Query } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {Database, objectVal, ref} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import feed  from '../../feed.json';

export interface Publicaciones{
  id: number;
  usuario: String;
  //imagenPost: String;
  //avatarUsuario: String;
  descripcionPost: String;
  //likes: number;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //@Output() posts: Publicaciones[] = feed.feed;
  getDataBase(){
    //this.bd.list('/');
    
  }

  usuarios$: AngularFireList<any[]>//Observable<Item[];

  constructor(private b_d: Database) {
    const bd = ref(b_d, 'prueba');
    this.usuarios$ = objectVal(bd).pipe(trace(b_d));
  }
  ngOnInit(){
    this.getDataBase();
  }
}

