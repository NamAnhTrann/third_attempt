import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adoration } from './adoration';

describe('Adoration', () => {
  let component: Adoration;
  let fixture: ComponentFixture<Adoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
