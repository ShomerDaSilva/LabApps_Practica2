import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss'],
})
export class CrearPublicacionComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage 
  ) { }

  ngOnInit() {}

  crearPost(){}

}