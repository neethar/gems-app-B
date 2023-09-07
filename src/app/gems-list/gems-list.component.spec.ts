import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsListComponent } from './gems-list.component';

describe('GemsListComponent', () => {
  let component: GemsListComponent;
  let fixture: ComponentFixture<GemsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GemsListComponent]
    });
    fixture = TestBed.createComponent(GemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
