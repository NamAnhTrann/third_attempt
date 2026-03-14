import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adoration',
  imports: [RouterLink],
  templateUrl: './adoration.html',
  styleUrl: './adoration.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class Adoration {

}
