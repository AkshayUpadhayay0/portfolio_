import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProjects } from './component-projects';

describe('ComponentProjects', () => {
  let component: ComponentProjects;
  let fixture: ComponentFixture<ComponentProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
