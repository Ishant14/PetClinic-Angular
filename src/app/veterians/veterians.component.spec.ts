import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteriansComponent } from './veterians.component';

describe('VeteriansComponent', () => {
  let component: VeteriansComponent;
  let fixture: ComponentFixture<VeteriansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteriansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteriansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
