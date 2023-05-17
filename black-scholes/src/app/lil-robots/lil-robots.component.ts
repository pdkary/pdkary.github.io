import { Component, OnInit } from '@angular/core';
import { RobotState } from 'src/model/robot-state';
import { RobotStateTransition } from 'src/model/robot-state-transition';

@Component({
  selector: 'app-lil-robots',
  templateUrl: './lil-robots.component.html',
  styleUrls: ['./lil-robots.component.scss']
})
export class LilRobotsComponent {

  public pxPerBot: number = 22;
  public robotSize: number = 10;
  public numRobots: number = 6;
  public transitionSize: number = 5;

  public allowedColors: string[] = ['default', 'yellow', 'blue'];

  public robots: RobotState[] = []
  public transitions: RobotStateTransition[] = [];
  public transitionOn: boolean[] = [];

  constructor() {
    this.robotSize = window.innerWidth/(this.pxPerBot*this.numRobots);
    this.setDefaultState();
    this.setDemoState();
  }

  public onAddRobotClicked(): void {
    this.numRobots++;
    if (this.numRobots > 20) this.numRobots = 20;
    this.robotSize = window.innerWidth/(this.pxPerBot*this.numRobots);
    this.setDefaultState();
  }
  public onRemoveRobotClicked(): void {
    this.numRobots--;
    if (this.numRobots < 3) this.numRobots = 3;
    this.robotSize = window.innerWidth/(this.pxPerBot*this.numRobots);
    this.setDefaultState();
  }
  
  public onAddClicked(): void {
    this.transitions.push({
      fromState: {
        leftState: this.getDefaultRobot(),
        selfState: this.getDefaultRobot(),
        rightState: this.getDefaultRobot(),
      },
      toState: this.getRandomRobot()
    } as RobotStateTransition);
    this.transitionOn.push(false);
  }

  public onRobotChange(newState: RobotState, index: number){
    this.robots[index] = newState;
  }

  public onTransitionChange(newTransition: RobotStateTransition, index: number){
    this.transitions[index] = newTransition;
  }

  public onTransitionActivityChange(transitionActivity: boolean, index: number){
    this.transitionOn[index] = transitionActivity;
  }

  public onTransitionRemoveClicked(index: number){
    this.transitions.splice(index,1)
    this.transitionOn.splice(index,1);
  }

  public applyTransitions() {
    let newRobots = JSON.parse(JSON.stringify(this.robots));
    for (let i = 0; i < this.numRobots; i++){
      let stateI = this.getTriState(i);
      this.transitions.forEach((transition, index) => {
        if (this.transitionOn[index] && this.transitionMatch(transition, stateI)) {
          newRobots[i] = transition.toState;
        }
      })
    }
    this.robots = newRobots;
  }
  
  public transitionMatch(transition: RobotStateTransition, triState: Partial<RobotStateTransition>): boolean {
    return this.stateMatch(transition.fromState.leftState, triState?.fromState?.leftState) &&
      this.stateMatch(transition.fromState.rightState, triState.fromState?.rightState) &&
      this.stateMatch(transition.fromState.selfState, triState.fromState?.selfState)
  }

  public stateMatch(state1: RobotState, state2: RobotState | undefined): boolean {
    if (state1.matchAny) return true;
    if (state1.isEdge && state2?.isEdge) return true;
    return state1.headColor == state2?.headColor &&
      state1.leftArmColor == state2?.leftArmColor &&
      state1.leftArmRaised == state2?.leftArmRaised &&
      state1.leftLegColor == state2?.leftLegColor &&
      state1.rightArmColor == state2?.rightArmColor &&
      state1.rightArmRaised == state2?.rightArmRaised &&
      state1.rightLegColor == state2?.rightLegColor;
  }

  public getTriState(i: number): Partial<RobotStateTransition> {
    return {
      fromState: {
        leftState: i > 0 ? this.robots[i-1] : this.getEdgeRobot(),
        selfState: this.robots[i],
        rightState: i < this.robots.length -1 ? this.robots[i+1] :  this.getEdgeRobot()
      }
    }
  }

  public setDefaultState(): void {
    this.robots = []
    for (let i = 0; i < this.numRobots; i++) {
      this.robots.push(this.getDefaultRobot())
    }
  }
  public setRandomState(): void {
    this.robots = []
    for (let i = 0; i < this.numRobots; i++) {
      this.robots.push(this.getRandomRobot())
    }
  }

  public getRandomRobot(): RobotState {
    return {
      headColor: this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)],
      leftArmColor: this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)],
      rightArmColor: this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)],
      leftLegColor: this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)],
      rightLegColor: this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)],
      rightArmRaised: Math.random() >= 0.5,
      leftArmRaised: Math.random() >= 0.5,
      matchAny: false,
      isEdge: false
      } as RobotState;
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

  public getEdgeRobot(): RobotState {
    return {
      isEdge: true
      } as RobotState;
  }
  public getWildcardRobot(): RobotState {
    return {
      matchAny: true
      } as RobotState;
  }

  public getTransitionsJSON(): string {
    return JSON.stringify(this.transitions);
  }
  public logtTransitionsJSON(): void {
    console.log(this.getTransitionsJSON());
  }

  public setDemoState(): void {
    this.robots[0].rightArmRaised = true;
    let demoStr = '[{"fromState":{"leftState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false,"isEdge":false},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":false,"matchAny":false,"isEdge":false},"rightState":{"matchAny":true}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false}},{"fromState":{"leftState":{"matchAny":true},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false,"isEdge":false},"rightState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false,"isEdge":false}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":false,"matchAny":false}},{"fromState":{"leftState":{"matchAny":true},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false,"isEdge":false},"rightState":{"isEdge":true}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false}},{"fromState":{"leftState":{"matchAny":true},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":false,"matchAny":false,"isEdge":false},"rightState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false,"isEdge":false}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false}},{"fromState":{"leftState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false,"isEdge":false},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false,"isEdge":false},"rightState":{"matchAny":true}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":false,"matchAny":false}},{"fromState":{"leftState":{"isEdge":true},"selfState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":false,"leftArmRaised":true,"matchAny":false,"isEdge":false},"rightState":{"matchAny":true}},"toState":{"headColor":"default","leftArmColor":"default","rightArmColor":"default","leftLegColor":"default","rightLegColor":"default","rightArmRaised":true,"leftArmRaised":false,"matchAny":false}}]';
    this.transitions = JSON.parse(demoStr);
    this.transitionOn = [...Array(this.transitions.length).keys()].map((val) => true);
  }
}
