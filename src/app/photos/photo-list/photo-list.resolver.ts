import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "src/app/types/Photo";
import { PhotoService } from "../photo/photo.service";

@Injectable({ providedIn: 'root' })

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;

    return this.service.listenFromUserPaginated(userName, 1);
  }

}
