import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantChangeInfoComponent } from './tenant-change-info.component';

describe('TenantChangeInfoComponent', () => {
  let component: TenantChangeInfoComponent;
  let fixture: ComponentFixture<TenantChangeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantChangeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantChangeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
