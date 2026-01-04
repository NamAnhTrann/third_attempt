import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-joy',
  imports: [RouterLink],
  templateUrl: './joy.html',
  styleUrl: './joy.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Joy implements AfterViewInit, OnDestroy {
  @ViewChild('bgCanvas', { static: true })
  bgCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;

  private resizeObserver!: ResizeObserver;
  private entities: BaseEntity[] = [];
  private rockets: FireworkRocket[] = [];
  private particles: FireworkParticle[] = [];
  private shockwaves: FireworkShockwave[] = [];
  private sparks: FireworkSpark[] = [];
  private fireworkInterval: any;

  ngAfterViewInit() {
    this.initCanvas();
    this.initScene();
    this.animate();
    this.startFireworks();
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    clearInterval(this.fireworkInterval);
  }

  /* ===================== SWIPER CONTROL ===================== */

  goToSlide(index: number) {
    const swiperEl = document.querySelector('#mainSwiper') as any;
    swiperEl?.swiper?.slideTo(index, 600);
  }

  /* ===================== CANVAS ===================== */

  private initCanvas() {
    const canvas = this.bgCanvas.nativeElement;
    const parent = canvas.parentElement as HTMLElement;

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (!w || !h) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      this.ctx = canvas.getContext('2d')!;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.width = w;
      this.height = h;
    };

    resize();
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(parent);
  }

  /* ===================== SCENE ===================== */

  private initScene() {
    this.entities = [];

    for (let i = 0; i < this.height; i++) {
      this.entities.push(new Star(this.width, this.height));
    }

    this.entities.push(new ShootingStar(this.width, this.height));
    this.entities.push(new ShootingStar(this.width, this.height));

    this.entities.push(
      new Terrain(this.width, this.height, { mHeight: this.height * 0.75 })
    );

    this.entities.push(
      new Terrain(this.width, this.height, {
        displacement: 90,
        scrollDelay: 50,
        fillStyle: 'rgb(17,20,40)',
        mHeight: this.height * 0.82,
      })
    );

    this.entities.push(
      new Terrain(this.width, this.height, {
        displacement: 70,
        scrollDelay: 25,
        fillStyle: 'rgb(10,10,5)',
        mHeight: this.height * 0.9,
      })
    );
  }

  /* ===================== FIREWORKS ===================== */

  private startFireworks() {
    this.fireworkInterval = setInterval(() => {
      if (document.hidden) return;

      const burst = 2 + Math.floor(Math.random() * 3);

      for (let i = 0; i < burst; i++) {
        this.rockets.push(new FireworkRocket(this.width, this.height));
      }
    }, 900);
  }

  /* ===================== LOOP ===================== */

  private animate = () => {
    requestAnimationFrame(this.animate);

    this.ctx.fillStyle = '#110E19';
    this.ctx.fillRect(0, 0, this.width, this.height);

    for (const e of this.entities) e.update(this.ctx);

    this.rockets = this.rockets.filter((r) => {
      drawRocketTrail(this.ctx, r.x, r.y, r.color);

      r.update(this.ctx, this.particles);

      if (r.done) {
        this.shockwaves.push(new FireworkShockwave(r.x, r.y, r.color));

        for (let i = 0; i < 25; i++) {
          this.sparks.push(new FireworkSpark(r.x, r.y, r.color));
        }
      }

      return !r.done;
    });

    this.particles = this.particles.filter((p) => {
      p.update(this.ctx);
      return p.life > 0;
    });
    this.sparks = this.sparks.filter((s) => {
      s.update(this.ctx);
      return s.life > 0;
    });

    this.shockwaves = this.shockwaves.filter((s) => {
      s.update(this.ctx);
      return s.life > 0;
    });
  };
}

/* ===================== BASE ===================== */

abstract class BaseEntity {
  abstract update(ctx: CanvasRenderingContext2D): void;
}

/* ===================== STAR ===================== */

class Star extends BaseEntity {
  private x = 0;
  private y = 0;
  private size = 0;
  private speed = 0;

  constructor(private width: number, private height: number) {
    super();
    this.reset();
  }

  private reset() {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.05;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x -= this.speed;
    if (this.x < 0) this.reset();
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

/* ===================== SHOOTING STAR ===================== */

class ShootingStar extends BaseEntity {
  private x = 0;
  private y = 0;
  private len = 0;
  private speed = 0;
  private size = 0;
  private waitUntil = 0;
  private active = false;

  constructor(private width: number, private height: number) {
    super();
    this.reset();
  }

  private reset() {
    this.x = Math.random() * this.width;
    this.y = 0;
    this.len = Math.random() * 80 + 20;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() + 0.3;
    this.waitUntil = Date.now() + Math.random() * 4000;
    this.active = false;
  }

  update(ctx: CanvasRenderingContext2D) {
    if (!this.active) {
      if (Date.now() > this.waitUntil) this.active = true;
      return;
    }

    this.x -= this.speed;
    this.y += this.speed;

    if (this.x < 0 || this.y > this.height) {
      this.reset();
      return;
    }

    ctx.lineWidth = this.size;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.len, this.y - this.len);
    ctx.stroke();
  }
}

/* ===================== TERRAIN ===================== */

class Terrain extends BaseEntity {
  private points: number[] = [];
  private lastScroll = Date.now();

  constructor(
    private width: number,
    private height: number,
    private options: {
      displacement?: number;
      scrollDelay?: number;
      fillStyle?: string;
      mHeight?: number;
    } = {}
  ) {
    super();

    const disp = options.displacement ?? 140;
    const mHeight = options.mHeight ?? height;
    const power = 2 ** Math.ceil(Math.log2(width));

    this.points[0] = mHeight;
    this.points[power] = mHeight;

    let d = disp;
    for (let i = 1; i < power; i *= 2) {
      for (let j = power / i / 2; j < power; j += power / i) {
        this.points[j] =
          (this.points[j - power / i / 2] + this.points[j + power / i / 2]) /
            2 +
          Math.random() * d -
          d / 2;
      }
      d *= 0.6;
    }
  }

  update(ctx: CanvasRenderingContext2D) {
    const delay = this.options.scrollDelay ?? 60;
    const color = this.options.fillStyle ?? '#191D4C';

    if (Date.now() > this.lastScroll + delay) {
      this.lastScroll = Date.now();
      this.points.push(this.points.shift()!);
    }

    ctx.fillStyle = color;
    ctx.beginPath();
    this.points.forEach((p, i) =>
      i === 0 ? ctx.moveTo(0, p) : ctx.lineTo(i, p)
    );
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.closePath();
    ctx.fill();
  }
}
/* ===================== FIREWORKS ===================== */

class FireworkRocket {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  done = false;
  color: string;
  shape: 'circle' | 'ring' | 'star' | 'heart';
  vx: number;
  wobble = Math.random() * Math.PI * 2;
  wobbleSpeed = Math.random() * 0.05 + 0.03;

  constructor(private width: number, private height: number) {
    this.x = Math.random() * width;
    this.y = height + 30;
    this.vy = Math.random() * 1.5 + 4;
    this.targetY = height * (0.25 + Math.random() * 0.3);
    this.color = FireworkPalette.random();
    const shapes: FireworkRocket['shape'][] = [
      'circle',
      'ring',
      'star',
      'heart',
    ];
    this.vx = (Math.random() - 0.5) * 0.6;

    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  update(ctx: CanvasRenderingContext2D, particles: FireworkParticle[]) {
    this.wobble += this.wobbleSpeed;

    const sway = Math.sin(this.wobble) * 0.4;

    this.x += this.vx + sway;
    this.y -= this.vy;

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 2, 12);

    if (this.y <= this.targetY) {
      this.explode(particles);
      this.done = true;
    }
  }

  private explode(particles: FireworkParticle[]) {
    const count = 110;
    const TWO_PI = Math.PI * 2;

    for (let i = 0; i < count; i++) {
      const t = (TWO_PI * i) / count;

      let angle = t;
      let radiusScale = 1;

      switch (this.shape) {
        case 'ring':
          radiusScale = 1;
          break;

        case 'star':
          radiusScale = 0.6 + 0.4 * Math.cos(5 * t);
          break;

        case 'heart': {
          const x = 16 * Math.pow(Math.sin(t), 3);
          const y = -(
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t)
          );

          angle = Math.atan2(y, x);

          radiusScale = Math.min(Math.sqrt(x * x + y * y) / 18, 1);

          break;
        }

        default:
          angle = Math.random() * TWO_PI;
          radiusScale = 1;
      }

      const p = new FireworkParticle(this.x, this.y, this.color, angle);

      p.vx *= radiusScale;
      p.vy *= radiusScale;

      particles.push(p);
    }
  }
}

class FireworkParticle {
  life: number;
  size: number;
  vx: number;
  vy: number;
  drag = 0.985;

  constructor(
    public x: number,
    public y: number,
    private color: string,
    angle?: number
  ) {
    const a = angle ?? Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 2;

    this.vx = Math.cos(a) * speed;
    this.vy = Math.sin(a) * speed;
    this.life = 60 + Math.random() * 25;
    this.size = Math.random() * 2 + 1;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.life--;

    this.vx *= this.drag;
    this.vy = this.vy * this.drag + 0.035;

    this.x += this.vx;
    this.y += this.vy;

    ctx.globalAlpha = this.life / 85;
    ctx.fillStyle = this.color;

    ctx.shadowBlur = 6;
    ctx.shadowColor = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }
}

class FireworkPalette {
  private static palettes = [
    ['#FFD6E8', '#FF9EC4', '#FFC1E3'], // pink
    ['#BEEBFF', '#7DD3FC', '#E0F2FE'], // sky
    ['#FFE6B3', '#FFD166', '#FFB703'], // amber
    ['#E8E6FF', '#C7C2FF', '#A5B4FC'], // lavender
    ['#E5E7EB', '#F9FAFB', '#D1D5DB'], // pearl
  ];

  static random(): string {
    const p = this.palettes[Math.floor(Math.random() * this.palettes.length)];
    return p[Math.floor(Math.random() * p.length)];
  }
}

class FireworkShockwave {
  radius = 0;
  life = 30;

  constructor(private x: number, private y: number, private color: string) {}

  update(ctx: CanvasRenderingContext2D) {
    this.life--;
    this.radius += 2.8;

    ctx.globalAlpha = this.life / 30;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = 1;
  }
}
class FireworkSpark {
  life = 25;
  vx: number;
  vy: number;

  constructor(private x: number, private y: number, private color: string) {
    const a = Math.random() * Math.PI * 2;
    const s = Math.random() * 1.5 + 0.5;

    this.vx = Math.cos(a) * s;
    this.vy = Math.sin(a) * s;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.life--;

    this.vy += 0.02;
    this.x += this.vx;
    this.y += this.vy;

    ctx.globalAlpha = this.life / 25;
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
  }
}
function drawRocketTrail(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) {
  ctx.globalAlpha = 0.15;
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.arc(x, y + 10, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1;
}
function applyBloom(ctx: CanvasRenderingContext2D, intensity: number) {
  ctx.fillStyle = `rgba(255,255,255,${intensity})`;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
