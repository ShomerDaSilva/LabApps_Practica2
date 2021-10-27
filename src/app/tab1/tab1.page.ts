import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import {AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';


interface Publicaciones {
  id: number; 
  usuario: String;
  //imagenPost: String;
  //avatarUsuario: String;
  descripcionPost: String;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page  implements OnInit {

 // usuarios: AngularFireList<any>;
  //@Output() posts: Publicaciones[] = feed.feed;


  usuarios$: Observable<any>[];//Observable<Item[]>;


  constructor(db: AngularFirestore) {
    
  }

  ngOnInit() {

    
  }

}