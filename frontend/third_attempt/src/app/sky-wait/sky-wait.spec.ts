import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyWait } from './sky-wait';

describe('SkyWait', () => {
  let component: SkyWait;
  let fixture: ComponentFixture<SkyWait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyWait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyWait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
