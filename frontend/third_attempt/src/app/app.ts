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
import { ViewChild, ElementRef, effect } from '@angular/core';

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
  @ViewChild('songText') songText!: ElementRef<HTMLElement>;

  shouldMarquee = signal(false);

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
  ngAfterViewInit() {
    effect(() => {
      // depend on song changes
      this.currentSong();

      requestAnimationFrame(() => {
        const el = this.songText?.nativeElement;
        if (!el) return;

        const parent = el.parentElement;
        if (!parent) return;

        const overflow = el.scrollWidth > parent.clientWidth;
        this.shouldMarquee.set(overflow);
      });
    });
  }

  private handleRouteMusic(url: string) {
    if (url.startsWith('/sky')) {
      this.setPlaylist(this.story_list);
    } else if (url.startsWith('/cat')) {
      this.setPlaylist(this.catPlaylist);
    } else if (url.startsWith('/joy')) {
      this.setPlaylist(this.essence_playlist);
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
    'songs/At least we’re under the same sky.mp3',
    'songs/Another life, another you (Suno AI) - Her.mp3',
  ];
  private catPlaylist: string[] = [
    'songs/At least we’re under the same sky.mp3',
    'songs/Another life, another you (Suno AI) - Her.mp3',
  ];

  private story_list: string[] = [
    'songs/At least we’re under the same sky.mp3',
    'songs/Another life, another you (Suno AI) - Her.mp3',
  ];

  private essence_playlist: string[] = [
    'songs/At least we’re under the same sky.mp3',
    'songs/Another life, another you (Suno AI) - Her.mp3',
  ];

  private currentPlaylist: string[] = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public nextTrack() {
    this.playNextTrack();
  }

  public prevTrack() {
    if (!this.currentPlaylist.length) return;

    const prevIndex =
      (this.i - 1 + this.currentPlaylist.length) % this.currentPlaylist.length;

    this.load(prevIndex);

    if (this.isMusicOn()) {
      this.play();
    }
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
      this.playNextTrack();
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

  private playNextTrack() {
    if (!this.currentPlaylist.length) return;

    const nextIndex = (this.i + 1) % this.currentPlaylist.length;
    this.load(nextIndex);
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
      title: ':)',
      html: `

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
        this.unlockMusic();
      } else {
        this.unlockMusic();
      }
    });
  }

  private unlockMusic() {
    if (!this.firstClickListenerAdded) {
      document.addEventListener('click', this.handleFirstClick, { once: true });
      this.firstClickListenerAdded = true;
    }
  }
}
