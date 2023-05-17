import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilRobotsComponent } from './lil-robots.component';

describe('LilRobotsComponent', () => {
  let component: LilRobotsComponent;
  let fixture: ComponentFixture<LilRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilRobotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LilRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
