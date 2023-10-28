import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  hasGameStarted = false;
  speed = 7.0;
  counterclockwise = false;

  startGameListener = (event: KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      this.hasGameStarted = true;
      document.removeEventListener('keydown', this.startGameListener);
      document.addEventListener('keydown', this.gameplayListener);
    }
  };

  gameplayListener = (event: KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      this.speed -= 0.3;
      this.counterclockwise = !this.counterclockwise;
    }
  };

  ngOnInit() {
    document.addEventListener('keydown', this.startGameListener);
  }
}
