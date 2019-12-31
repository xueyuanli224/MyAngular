import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookDishesComponent } from './cook-dishes.component';

describe('CookDishesComponent', () => {
  let component: CookDishesComponent;
  let fixture: ComponentFixture<CookDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
