import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Homepage {
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
}
