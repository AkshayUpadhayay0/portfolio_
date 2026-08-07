import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEducation } from './component-education';

describe('ComponentEducation', () => {
  let component: ComponentEducation;
  let fixture: ComponentFixture<ComponentEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
