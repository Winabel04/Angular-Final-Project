import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManSideNavComponent } from './handy-man-side-nav.component';

describe('HandyManSideNavComponent', () => {
  let component: HandyManSideNavComponent;
  let fixture: ComponentFixture<HandyManSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
