import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabByPinComponent } from './grab-by-pin.component';

describe('GrabByPinComponent', () => {
  let component: GrabByPinComponent;
  let fixture: ComponentFixture<GrabByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
