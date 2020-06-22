import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      photos = [
        {
          url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_12.jpg',
          description: 'Leão'
        },
        {
          url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_28.jpg',
          description: 'Leoa'
        },
        {
          url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_28.jpg',
          description: 'Leoa'
        }
      ];
}
