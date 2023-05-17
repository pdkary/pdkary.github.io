import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubixComponent } from './rubix.component';

describe('RubixComponent', () => {
  let component: RubixComponent;
  let fixture: ComponentFixture<RubixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
