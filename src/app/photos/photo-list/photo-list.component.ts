import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/types/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  photos: Photo[] = [];
  filter: string = '';

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
    .listenFromUser(userName)
    .subscribe(photos => this.photos = photos)
  }


  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
}







