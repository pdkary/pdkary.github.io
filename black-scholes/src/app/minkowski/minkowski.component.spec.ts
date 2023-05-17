import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinkowskiComponent } from './minkowski.component';

describe('MinkowskiComponent', () => {
  let component: MinkowskiComponent;
  let fixture: ComponentFixture<MinkowskiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinkowskiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinkowskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
