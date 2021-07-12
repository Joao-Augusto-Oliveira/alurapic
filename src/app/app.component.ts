import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './types/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos: Photo[] = [];

  constructor(http: HttpClient){

    http
      .get<Photo[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => {
        console.log(photos);
        this.photos = photos})
  }
}
