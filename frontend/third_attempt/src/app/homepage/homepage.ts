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
    @ViewChild('swiperContainer', { static: false })
swiperRef!: ElementRef;

  @HostListener('document:click')
  unlockAutoplay() {
    if (this.unlocked) return;

    const video = document.querySelector('video') as HTMLVideoElement | null;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    this.unlocked = true;
  }

  nextSlide() {
  const swiper = this.swiperRef.nativeElement.swiper;
  swiper.slideNext();
}


    ngAfterViewInit() {
    this.pageFlip = new PageFlip(this.bookRef.nativeElement, {
      width: 450,
      height: 550,
      showCover: false,
      useMouseEvents: true,
      mobileScrollSupport: true,
      swipeDistance: 30,
    });

    this.pageFlip.loadFromImages([
      '/book_3/1.png',
      '/book_3/2.png',
      '/book_3/3.png',
      '/book_3/4.png',
      '/book_3/5.png',
      '/book_3/6.png',
      '/book_3/7.png',
      '/book_3/8.png',
      '/book_3/9.png',
      '/book_3/10.png',

    ]);
  }

  nextPage() {
    this.pageFlip.flipNext();
  }

  prevPage() {
    this.pageFlip.flipPrev();
 
 
  }

  @ViewChild('mainVideo') videoRef!: ElementRef<HTMLVideoElement>;

isPlaying = true;

toggleVideo() {
  const video = this.videoRef.nativeElement;

  if (video.paused) {
    video.play();
    this.isPlaying = true;
  } else {
    video.pause();
    this.isPlaying = false;
  }
}
}
