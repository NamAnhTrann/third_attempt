import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import TypeIt from 'typeit';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Homepage implements AfterViewInit {
  ngAfterViewInit(): void {
    new TypeIt('#typewriterTarget', {
      speed: 60,
      waitUntilVisible: true,
      cursor: false,
    })
      .break()
      .type('✧˖°. The Third Attempt 𖹭.ᐟ')
      .go();
  }
}
