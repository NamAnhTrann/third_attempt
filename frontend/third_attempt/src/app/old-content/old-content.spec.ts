import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldContent } from './old-content';

describe('OldContent', () => {
  let component: OldContent;
  let fixture: ComponentFixture<OldContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
