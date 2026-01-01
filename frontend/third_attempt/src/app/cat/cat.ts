import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cat',
  imports: [RouterLink],
  templateUrl: './cat.html',
  styleUrl: './cat.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cat  {

}
