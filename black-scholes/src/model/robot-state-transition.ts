import { RobotState } from "./robot-state";

export interface RobotStateTransition {
    fromState: {
        leftState: RobotState,
        rightState: RobotState,
        selfState: RobotState
    };
    toState: RobotState;
}
  