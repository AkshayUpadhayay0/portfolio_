import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHobbies } from './component-hobbies';

describe('ComponentHobbies', () => {
  let component: ComponentHobbies;
  let fixture: ComponentFixture<ComponentHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHobbies],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentHobbies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
