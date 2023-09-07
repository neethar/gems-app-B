import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsAddComponent } from './gems-add.component';

describe('GemsAddComponent', () => {
  let component: GemsAddComponent;
  let fixture: ComponentFixture<GemsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GemsAddComponent]
    });
    fixture = TestBed.createComponent(GemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
