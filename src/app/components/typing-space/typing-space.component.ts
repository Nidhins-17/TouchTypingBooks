import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-typing-space',
  standalone: true,
  imports: [FormsModule, MatGridListModule, MatButtonModule, MatSlideToggleModule, MatCardModule],
  templateUrl: './typing-space.component.html',
  styleUrl: './typing-space.component.css'
})
export class TypingSpaceComponent implements OnInit{
  typingSpaceTitle: string = "Type something";
  typingContent: string = "";
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.http.get("https://official-joke-api.appspot.com/random_joke").subscribe((res: any)=> {
      this.typingContent = res.setup + "\n" + res.punchline;
    });
  }

}
