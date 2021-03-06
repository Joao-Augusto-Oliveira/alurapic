import { Input } from '@angular/core';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from 'src/app/types/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.photos)
    this.rows = this.groupColums(this.photos);
  }

  groupColums(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
