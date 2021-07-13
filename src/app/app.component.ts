import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './types/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService){ }

  ngOnInit(){
    this.photoService
    .listenFromUser('flavio')
    .subscribe(photos => {
      console.log(photos);
      this.photos = photos})
  }

}
