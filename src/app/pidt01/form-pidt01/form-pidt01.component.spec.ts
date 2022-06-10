import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPidt01Component } from './form-pidt01.component';

describe('FormPidt01Component', () => {
  let component: FormPidt01Component;
  let fixture: ComponentFixture<FormPidt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPidt01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPidt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
