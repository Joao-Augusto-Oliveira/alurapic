import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "src/app/types/Photo";

@Pipe({ name: 'filterbyDescription'})
export class filterbyDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string){
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if(descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
      }else {
        return photos;
      }
    }

  }