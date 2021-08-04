import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManChangeInfoComponent } from './handy-man-change-info.component';

describe('HandyManChangeInfoComponent', () => {
  let component: HandyManChangeInfoComponent;
  let fixture: ComponentFixture<HandyManChangeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManChangeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManChangeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
