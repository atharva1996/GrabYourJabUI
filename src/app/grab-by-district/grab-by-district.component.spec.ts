import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabByDistrictComponent } from './grab-by-district.component';

describe('GrabByDistrictComponent', () => {
  let component: GrabByDistrictComponent;
  let fixture: ComponentFixture<GrabByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabByDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
