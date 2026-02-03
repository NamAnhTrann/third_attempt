import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageFlip } from 'page-flip';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
    imports: [RouterLink],

  styleUrl: './homepage.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Homepage {
    @ViewChild('book', { static: true })
  bookRef!: ElementRef<HTMLDivElement>;
  private unlocked = false;

    private pageFlip!: PageFlip;

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
      width: 410,
      height: 590,
      showCover: false,
      useMouseEvents: true,
      mobileScrollSupport: true,
      swipeDistance: 30,
    });

    this.pageFlip.loadFromImages([
      '/book_2/1.jpg',
      '/book_2/2.jpg',
      '/book_2/3.jpg',
      '/book_2/4.jpg',
      '/book_2/5.jpg',
      '/book_2/6.jpg',
      '/book_2/7.jpg',
      '/book_2/8.jpg',
      '/book_2/9.jpg',
      '/book_2/10.jpg',
      '/book_2/11.jpg',
      '/book_2/12.jpg',
      '/book_2/13.jpg',
      '/book_2/14.jpg',
      '/book_2/15.jpg',
      '/book_2/16.jpg',
      '/book_2/17.jpg',
      '/book_2/18.jpg',
      '/book_2/19.jpg',
      '/book_2/20.jpg',
      '/book_2/21.jpg',
      '/book_2/22.jpg',
      '/book_2/23.jpg',
      '/book_2/24.jpg',
      '/book_2/25.jpg',
      '/book_2/26.jpg',
      '/book_2/27.jpg',
      '/book_2/28.jpg',
      '/book_2/29.jpg',
      '/book_2/30.jpg',

    ]);
  }

  nextPage() {
    this.pageFlip.flipNext();
  }

  prevPage() {
    this.pageFlip.flipPrev();
  }
}
