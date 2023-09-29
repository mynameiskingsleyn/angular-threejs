import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanComponent } from './ocean.component';

describe('OceanComponent', () => {
  let component: OceanComponent;
  let fixture: ComponentFixture<OceanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OceanComponent]
    });
    fixture = TestBed.createComponent(OceanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
