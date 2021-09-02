import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  followers="2M";
  following="3"
  posts= "12";
  description="Hola soy Max y soy un perro feliz :D ";
  avatar = 'Ruffles.png';
  postsURLS = [
    'p1.png',
    'p2.png',
    'p3.png',
    'p4.png',
    'p5.png',
    'p6.png',
    'p7.png',
    'p8.png',
    'p9.png',
    'p10.png',
    'p11.png',
    'p12.png',
  ];

  esUsuario = false;

  constructor() {}

}
