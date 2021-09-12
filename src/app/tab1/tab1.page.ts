import { Component } from '@angular/core';
import feed  from '../../feed.json';

interface Publicaciones{
  id: number;
  usuario: String;
  imagenPost: String;
  avatarUsuario: String;
  descripcionPost: String;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: Publicaciones[] = feed.feed;
  constructor() {}

}
