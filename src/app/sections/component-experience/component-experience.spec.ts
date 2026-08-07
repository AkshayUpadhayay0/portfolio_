import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExperience } from './component-experience';

describe('ComponentExperience', () => {
  let component: ComponentExperience;
  let fixture: ComponentFixture<ComponentExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
