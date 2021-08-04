import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManInfoComponent } from './handy-man-info.component';

describe('HandyManInfoComponent', () => {
  let component: HandyManInfoComponent;
  let fixture: ComponentFixture<HandyManInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
