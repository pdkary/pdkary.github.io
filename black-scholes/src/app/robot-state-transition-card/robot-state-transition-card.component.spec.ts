import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotStateTransitionCardComponent } from './robot-state-transition-card.component';

describe('RobotStateTransitionCardComponent', () => {
  let component: RobotStateTransitionCardComponent;
  let fixture: ComponentFixture<RobotStateTransitionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotStateTransitionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotStateTransitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
