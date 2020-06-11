import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    photos = [
      {
        url: 'https://vs.media/enlarge?height=608&nocrop=false&url=http%3A%2F%2Fimg.vs.media%2F1572469605596-235001.jpg&width=1080',
        description: 'Leão'
      },
      {
        url: 'https://i1.wp.com/cromossomonerd.com.br/wp-content/uploads/2019/10/lucian-senna-lol-capa.png?resize=1068%2C600&ssl=1',
        description: 'Leoa'
      },
      {
        url: 'https://vs.media/enlarge?height=608&nocrop=false&url=http%3A%2F%2Fimg.vs.media%2F1572469605596-235001.jpg&width=1080',
        description: 'Leão'
      }
    ];
    
    
}
