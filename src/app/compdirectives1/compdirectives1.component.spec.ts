import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compdirectives1Component } from './compdirectives1.component';

describe('Compdirectives1Component', () => {
  let component: Compdirectives1Component;
  let fixture: ComponentFixture<Compdirectives1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compdirectives1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compdirectives1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
