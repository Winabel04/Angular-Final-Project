import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManComponent } from './handy-man.component';

describe('HandyManComponent', () => {
  let component: HandyManComponent;
  let fixture: ComponentFixture<HandyManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
