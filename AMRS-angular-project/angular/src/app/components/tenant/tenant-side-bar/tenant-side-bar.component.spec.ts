import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantSideBarComponent } from './tenant-side-bar.component';

describe('TenantSideBarComponent', () => {
  let component: TenantSideBarComponent;
  let fixture: ComponentFixture<TenantSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
