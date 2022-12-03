import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackScholesComponent } from './black-scholes.component';

describe('BlackScholesComponent', () => {
  let component: BlackScholesComponent;
  let fixture: ComponentFixture<BlackScholesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackScholesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackScholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
