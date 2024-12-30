import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypingSpaceComponent } from './components/typing-space/typing-space.component';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StatsComponent } from './components/stats/stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TypingSpaceComponent, CommonModule, MatSlideToggleModule, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Touch Typing';
  statsVisible: boolean = false;

  toggleStats () {
    this.statsVisible = !this.statsVisible;
  }
}
