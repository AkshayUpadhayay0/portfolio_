import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSkills } from './component-skills';

describe('ComponentSkills', () => {
  let component: ComponentSkills;
  let fixture: ComponentFixture<ComponentSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
