import { Component, Output } from '@angular/core';
import feed  from '../../feed.json';

export interface Publicaciones{
  id: number;
  usuario: String;
  imagenPost: String;
  avatarUsuario: String;
  descripcionPost: String;
  likes: number;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @Output() posts: Publicaciones[] = feed.feed;
  constructor() {}

}
