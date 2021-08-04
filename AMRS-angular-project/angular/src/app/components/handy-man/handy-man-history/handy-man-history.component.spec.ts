import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManHistoryComponent } from './handy-man-history.component';

describe('HandyManHistoryComponent', () => {
  let component: HandyManHistoryComponent;
  let fixture: ComponentFixture<HandyManHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
