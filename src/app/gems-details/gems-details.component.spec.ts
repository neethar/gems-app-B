import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsDetailsComponent } from './gems-details.component';

describe('GemsDetailsComponent', () => {
  let component: GemsDetailsComponent;
  let fixture: ComponentFixture<GemsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GemsDetailsComponent]
    });
    fixture = TestBed.createComponent(GemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
