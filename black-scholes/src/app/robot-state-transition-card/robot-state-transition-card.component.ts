import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { RobotState } from 'src/model/robot-state';
import { RobotStateTransition } from 'src/model/robot-state-transition';

@Component({
  selector: 'robot-state-transition-card',
  templateUrl: './robot-state-transition-card.component.html',
  styleUrls: ['./robot-state-transition-card.component.scss']
})
export class RobotStateTransitionCardComponent {

  @Input()
  public robotSize: number = 5;

  @Input()
  public stateTransition: RobotStateTransition;

  @Input()
  public interactive: boolean = true;

  @Input()
  public active: boolean = false;

  @Output()
  public onChange: EventEmitter<RobotStateTransition> = new EventEmitter();

  @Output()
  public onActiveChange: EventEmitter<boolean> = new EventEmitter();
  
  @Output()
  public removeClicked: EventEmitter<void> = new EventEmitter();


  constructor(private _cdr: ChangeDetectorRef) {
    
  }

  public get leftState(): RobotState {
    return this.stateTransition.fromState.leftState;
  }
  public get selfState(): RobotState {
    return this.stateTransition.fromState.selfState;
  }
  public get rightState(): RobotState {
    return this.stateTransition.fromState.rightState;
  }
  public get nextState(): RobotState {
    return this.stateTransition.toState;
  }

  public onActiveChanged(){
    this.onActiveChange.emit(this.active);
  }

  public onLeftChange(state: RobotState){
    this.stateTransition.fromState.leftState = state
    this.onChange.emit(this.stateTransition);
  }
  public onSelfChange(state: RobotState){
    this.stateTransition.fromState.selfState = state
    this.onChange.emit(this.stateTransition);
  }
  public onRightChange(state: RobotState){
    this.stateTransition.fromState.rightState = state
    this.onChange.emit(this.stateTransition);
  }
  public onNextChange(state: RobotState){
    this.stateTransition.toState = state
    this.onChange.emit(this.stateTransition);
  }
  public onRemoveClicked(): void {
    this.removeClicked.emit();
  }

  public onLeftWildcardClicked(): void {
    let isMatchAny = this.stateTransition.fromState.leftState.matchAny;
    this.stateTransition.fromState.leftState = isMatchAny ? this.getDefaultRobot() : {matchAny: true} as RobotState;
    this.onChange.emit(this.stateTransition);
  }
  public onSelfWildcardClicked(): void {
    let isMatchAny = this.stateTransition.fromState.selfState.matchAny;
    this.stateTransition.fromState.selfState = isMatchAny ? this.getDefaultRobot() : {matchAny: true} as RobotState;
    this.onChange.emit(this.stateTransition);
  }
  public onRightWildcardClicked(): void {
    let isMatchAny = this.stateTransition.fromState.rightState.matchAny;
    this.stateTransition.fromState.rightState = isMatchAny ? this.getDefaultRobot() : {matchAny: true} as RobotState;
    this.onChange.emit(this.stateTransition);
  }

  public onLeftTerminalClicked(): void {
    let isEdge = this.stateTransition.fromState.leftState.isEdge;
    this.stateTransition.fromState.leftState = isEdge ? this.getDefaultRobot() : {isEdge: true} as RobotState;
    this.onChange.emit(this.stateTransition);
  }
  public onRightTerminalClicked(): void {
    let isEdge = this.stateTransition.fromState.rightState.isEdge;
    this.stateTransition.fromState.rightState = isEdge ? this.getDefaultRobot() : {isEdge: true} as RobotState;
    this.onChange.emit(this.stateTransition);
  }

  public getDefaultRobot(): RobotState {
    return {
      headColor:'default',
      leftArmColor: 'default',
      rightArmColor: 'default',
      leftLegColor: 'default',
      rightLegColor: 'default',
      rightArmRaised: false,
      leftArmRaised: false,
      matchAny: false,
      isEdge: false
      } as RobotState;
  }
}
