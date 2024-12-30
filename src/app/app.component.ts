import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypingSpaceComponent } from './components/typing-space/typing-space.component';
import { StatsComponent } from './components/stats/stats.component';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TypingSpaceComponent, StatsComponent, CommonModule, MatGridListModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Touch Typing';
  statsVisible: boolean = false;

  toggleStats () {
    this.statsVisible = !this.statsVisible;
  }
}
