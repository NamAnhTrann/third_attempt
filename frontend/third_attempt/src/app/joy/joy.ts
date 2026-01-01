import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import TypeIt from 'typeit';

@Component({
  selector: 'app-joy',
  imports: [RouterLink],
  templateUrl: './joy.html',
  styleUrl: './joy.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Joy implements AfterViewInit {
  @ViewChild('bgCanvas', { static: true })
  bgCanvas!: ElementRef<HTMLCanvasElement>;

  private bgCtx!: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;

  private entities: any[] = [];
  private resizeObserver!: ResizeObserver;

  ngAfterViewInit() {
    this.setupCanvas();
    this.initBackground();
    this.animate();
    
  }

  private setupCanvas() {
    const canvas = this.bgCanvas.nativeElement;
    const parent = canvas.parentElement as HTMLElement;

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      if (!w || !h) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      this.bgCtx = canvas.getContext('2d')!;
      this.bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.width = w;
      this.height = h;
    };

    resize();
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(parent);
  }

  private initBackground() {
    this.entities = [];

    // stars
    for (let i = 0; i < this.height; i++) {
      this.entities.push(new Star(this.width, this.height));
    }

    // shooting stars
    this.entities.push(new ShootingStar(this.width, this.height));
    this.entities.push(new ShootingStar(this.width, this.height));

    // terrain layers
    this.entities.push(
      new Terrain(this.width, this.height, {
        mHeight: this.height * 0.75,
      })
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

  private animate = () => {
    requestAnimationFrame(this.animate);

    // background
    this.bgCtx.fillStyle = '#110E19';
    this.bgCtx.fillRect(0, 0, this.width, this.height);

    // draw all entities
    for (const e of this.entities) {
      e.update(this.bgCtx);
    }
  };
  

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }
}



































/* ===================== STAR ===================== */

class Star {
  x!: number;
  y!: number;
  size!: number;
  speed!: number;

  constructor(private width: number, private height: number) {
    this.reset();
  }

  reset() {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.05;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x -= this.speed;
    if (this.x < 0) this.reset();

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

/* ===================== SHOOTING STAR ===================== */

class ShootingStar {
  x = 0;
  y = 0;
  len = 0;
  speed = 0;
  size = 0;
  waitTime = 0;
  active = false;

  constructor(private width: number, private height: number) {
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.width;
    this.y = 0;
    this.len = Math.random() * 80 + 20;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() + 0.3;
    this.waitTime = Date.now() + Math.random() * 4000;
    this.active = false;
  }

  update(ctx: CanvasRenderingContext2D) {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;

      if (this.x < 0 || this.y > this.height) {
        this.reset();
      } else {
        ctx.lineWidth = this.size;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len, this.y - this.len);
        ctx.stroke();
      }
    } else if (Date.now() > this.waitTime) {
      this.active = true;
    }
  }
}

/* ===================== TERRAIN ===================== */

class Terrain {
  points: number[] = [];
  lastScroll = Date.now();

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
    const displacement = options.displacement ?? 140;
    const mHeight = options.mHeight ?? height;
    const power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

    this.points[0] = mHeight;
    this.points[power] = mHeight;

    let disp = displacement;

    for (let i = 1; i < power; i *= 2) {
      for (let j = power / i / 2; j < power; j += power / i) {
        this.points[j] =
          (this.points[j - power / i / 2] + this.points[j + power / i / 2]) /
            2 +
          Math.random() * disp -
          disp / 2;
      }
      disp *= 0.6;
    }
  }

  update(ctx: CanvasRenderingContext2D) {
    const scrollDelay = this.options.scrollDelay ?? 60;
    const fillStyle = this.options.fillStyle ?? '#191D4C';

    if (Date.now() > this.lastScroll + scrollDelay) {
      this.lastScroll = Date.now();
      this.points.push(this.points.shift()!);
    }

    ctx.fillStyle = fillStyle;
    ctx.beginPath();

    for (let i = 0; i < this.points.length; i++) {
      if (i === 0) ctx.moveTo(0, this.points[i]);
      else ctx.lineTo(i, this.points[i]);
    }

    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.closePath();
    ctx.fill();
  }
}
