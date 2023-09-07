import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsEditComponent } from './gems-edit.component';

describe('GemsEditComponent', () => {
  let component: GemsEditComponent;
  let fixture: ComponentFixture<GemsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GemsEditComponent]
    });
    fixture = TestBed.createComponent(GemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
