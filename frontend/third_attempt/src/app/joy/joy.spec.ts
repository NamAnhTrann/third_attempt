import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joy } from './joy';

describe('Joy', () => {
  let component: Joy;
  let fixture: ComponentFixture<Joy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Joy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Joy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
