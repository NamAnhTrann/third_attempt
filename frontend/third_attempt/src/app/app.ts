import { Component, HostListener, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Header } from './header/header';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('her');
  isMenuOpen = false;
  loading = false;
  loadingMessage = '';

  private minDuration = 3000;
  private startTime = 0;

  currentSong = signal('');
  isEasterEgg = signal(false);
  private isFirstNavigation = true;

  public audio = new Audio();
  private i = 0;

  isCollapsed = signal(false);
  isMusicOn = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.isFirstNavigation) {
          this.isFirstNavigation = false;
          return;
        }
        this.startLoading();
      }

      if (event instanceof NavigationEnd) {
        this.handleRouteMusic(event.urlAfterRedirects);
        this.stopLoading();
      }

      if (
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.stopLoading();
      }
    });
  }

private handleRouteMusic(url: string) {
  if (url.startsWith('/sky')) {
    this.setPlaylist(this.story_list);
  } else if (url.startsWith('/cat')) {
    this.setPlaylist(this.catPlaylist);
  } else {
    this.setPlaylist(this.defaultPlaylist);
  }
}



  private startLoading() {
    this.startTime = Date.now();
    this.pickRandomMessage();
    this.loading = true;
  }

  private messages = [
    'Just a moment..., it’s finding its way 𖹭.ᐟ',
    'Patience... good things are arriving 𖹭.ᐟ',
    'One tiny moment... I promise 𖹭.ᐟ',
  ];

  private pickRandomMessage() {
    const index = Math.floor(Math.random() * this.messages.length);
    this.loadingMessage = this.messages[index];
  }

  private stopLoading() {
    const elapsed = Date.now() - this.startTime;
    const remaining = this.minDuration - elapsed;

    if (remaining > 0) {
      setTimeout(() => {
        this.loading = false;
      }, remaining);
    } else {
      this.loading = false;
    }
  }

private defaultPlaylist: string[] = [
  'songs/willow.mp3',
  'songs/fragility.mp3',
];

private catPlaylist: string[] = [
  'songs/chevy - uwu.mp3',
  'songs/Nancy Kwai 歸綽嶢 - Teaser (Official Audio).mp3',
  'songs/aha.mp3',
  'songs/Original Song- MondaySunday (by Emma) (1).mp3',
  'songs/can we (feat. Emi Choi).mp3'
];

private story_list: string[] = [
  'songs/Philharmonia Orchestra, Laufey - Let You Break My Heart Again (Karaoke Version).mp3',
  'songs/Love Story (Piano Version).mp3',
  'songs/Watashino Uso.mp3',
  'sonsg/Chainsaw Man The Movie_ Reze Arc  OST -  04 - first glance.mp3'

]

private currentPlaylist: string[] = [];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = document.getElementById('options-menu');
    const button = document.getElementById('options-menu-button');

    if (
      !menu?.contains(event.target as Node) &&
      !button?.contains(event.target as Node)
    ) {
      this.isMenuOpen = false;
    }
  }

  showPlayHint = signal(false);
  private firstClickListenerAdded = false;

ngOnInit(): void {
  this.audio.preload = 'auto';
  this.audio.loop = false;
  this.audio.volume = 0.3;

  this.showWelcomePopup();

  // start with default playlist
  this.setPlaylist(this.defaultPlaylist);

  this.audio.addEventListener('ended', () => {
    this.next();
  });
}


  private handleFirstClick = () => {
    // Just unlock audio; do NOT restart the song
    this.audio.play().then(() => {
      this.isMusicOn.set(true);
    });
  };

  private setPlaylist(list: string[]) {
    if (!list.length) return;

    this.currentPlaylist = list;
    this.i = 0;

    this.audio.pause();
    this.audio.currentTime = 0;

    this.load(this.i);

    if (this.isMusicOn()) {
      this.play();
    }
  }

  private load(index: number) {
    if (!this.currentPlaylist?.length) return;

    this.i =
      ((index % this.currentPlaylist.length) + this.currentPlaylist.length) %
      this.currentPlaylist.length;

    this.audio.src = this.currentPlaylist[this.i]; 

    const raw = this.currentPlaylist[this.i].split('/').pop() ?? '';
    this.currentSong.set(raw.replace(/\.[^/.]+$/, ''));
  }

  private next() {
    if (!this.currentPlaylist.length) return;
    this.load(this.i + 1);
    this.play();
  }

  private async play() {
    try {
      await this.audio.play();
    } catch {
      this.showPlayHint.set(true);
    }
  }

  public pause() {
    this.audio.pause();
    this.isMusicOn.set(false);
  }

  public resume() {
    this.play();
    this.isMusicOn.set(true);
  }

  public toggleMusic() {
    if (this.isMusicOn()) {
      this.pause();
    } else {
      this.resume();
    }
  }

  showWelcomePopup() {
    Swal.fire({
      title: 'This Might Be Better On Laptop',
      html: `
      <p style="font-size: 1rem; line-height: 1.6;">
        Tried to optimise this on mobile but I am bad at frontend, UI stuff, sorry •ᴗ•
      </p>
    `,
      width: '32rem',
      padding: '1.5rem',
      background: 'rgba(0,0,0,1)',
      color: '#ffffffff',
      confirmButtonText: 'Next',
      confirmButtonColor: '#444141ff',
      allowOutsideClick: true,
      allowEscapeKey: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // User pressed NEXT -> show popup 2, do NOT play music
        this.showNextPopup();
      } else {
        // User DISMISSED popup 1 (close, outside click, esc) -> play music
        this.unlockMusic();
      }
    });
  }

  showNextPopup() {
    Swal.fire({
      title:
        'If you see redacted text, tap on them and PLEASE SELECT THE OPTION BY ORDER ( i know u wont but please remember to read all )',
      html: `
      <p style="font-size: 1rem; line-height: 1.6;">
        Have Fun.
      </p>
    `,
      width: '32rem',
      padding: '1.5rem',
      background: 'rgba(0,0,0,1)',
      color: '#ffffffff',
      confirmButtonText: 'Close',
      confirmButtonColor: '#444141ff',
      allowOutsideClick: true,
      allowEscapeKey: true,
    }).then(() => {
      // User closed popup 2 -> NOW play music
      this.unlockMusic();
    });
  }

  private unlockMusic() {
    if (!this.firstClickListenerAdded) {
      document.addEventListener('click', this.handleFirstClick, { once: true });
      this.firstClickListenerAdded = true;
    }
  }
}
