import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { PageFlip } from 'page-flip';

@Component({
  selector: 'app-sky-wait',
  standalone: true,
  templateUrl: './sky-wait.html',
  styleUrl: './sky-wait.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SkyWait {
  @ViewChild('book', { static: true })
  bookRef!: ElementRef<HTMLDivElement>;

  private pageFlip!: PageFlip;
  private unlocked = false;

  @HostListener('document:click')
  unlockAutoplay() {
    if (this.unlocked) return;

    const video = document.querySelector('video') as HTMLVideoElement | null;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});
    this.unlocked = true;
  }

  ngAfterViewInit() {
    this.pageFlip = new PageFlip(this.bookRef.nativeElement, {
      width: 550,
      height: 730,
      showCover: false,
      useMouseEvents: true,
      mobileScrollSupport: true,
      swipeDistance: 30,
    });

this.pageFlip.loadFromImages([
  '/book/1.png',
  '/book/2.png',
  '/book/3.png',
  '/book/4.png',
  '/book/5.png',
  '/book/6.png',
  '/book/7.png',
  '/book/8.png',
  '/book/9.png',
  '/book/10.png',
  '/book/11.png',
  '/book/12.png',
  '/book/13.png',
  '/book/14.png',
  '/book/15.png',
  '/book/16.png',
  '/book/17.png',
  '/book/18.png',
  '/book/19.png',
  '/book/20.png',
  '/book/21.png',
  '/book/22.png',
  '/book/23.png',
  '/book/24.png',
  '/book/25.png',
  '/book/26.png',
  '/book/27.png',
  '/book/28.png',
  '/book/29.png',
]);

  }

  nextPage() {
    this.pageFlip.flipNext();
  }

  prevPage() {
    this.pageFlip.flipPrev();
  }
}
