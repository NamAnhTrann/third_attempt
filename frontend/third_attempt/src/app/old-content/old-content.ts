import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-old-content',
  imports: [RouterLink],
  templateUrl: './old-content.html',
  styleUrl: './old-content.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OldContent {

}
