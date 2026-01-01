import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Homepage implements AfterViewInit {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      const video = this.bgVideo.nativeElement;

      video.muted = true;
      video.playsInline = true;

      video.play().catch(() => {
        // browser blocked it, but it will start after first interaction
      });
    }, 200);
  }
}
