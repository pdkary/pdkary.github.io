import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilRobotComponent } from './lil-robot.component';

describe('LilRobotComponent', () => {
  let component: LilRobotComponent;
  let fixture: ComponentFixture<LilRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilRobotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LilRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
