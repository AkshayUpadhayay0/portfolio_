import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHero } from './component-hero';

describe('ComponentHero', () => {
  let component: ComponentHero;
  let fixture: ComponentFixture<ComponentHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
