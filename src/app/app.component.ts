import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url:'https://www.estudarfora.org.br/wp-content/webp-express/webp-images/uploads/2018/05/cursos-sobre-Star-Wars-1-768x512.jpg.webp',
      description: 'Mestre Yoda'
    },
    {
      url:'https://www.hojeemdia.com.br/polopoly_fs/1.736936.1566431176!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
      description: 'R2D2'
    }
  ];
}
