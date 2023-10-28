import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  hasGameStarted = false;
  speed = 7.0;

  startGameListener = (event: KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      this.hasGameStarted = true;
      document.removeEventListener('keydown', this.startGameListener);
    }
  };

  ngOnInit() {
    document.addEventListener('keydown', this.startGameListener);
  }

  getAnimationDuration(): string {
    return `${this.speed}s`;
  }
}
