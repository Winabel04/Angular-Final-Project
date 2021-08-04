import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeInfoComponent } from './admin-change-info.component';

describe('AdminChangeInfoComponent', () => {
  let component: AdminChangeInfoComponent;
  let fixture: ComponentFixture<AdminChangeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChangeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
