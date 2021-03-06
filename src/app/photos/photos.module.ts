import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    ]
})

export class PhotosModule {}
