import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { RobotState } from 'src/model/robot-state';

@Component({
  selector: 'lil-robot',
  templateUrl: './lil-robot.component.html',
  styleUrls: ['./lil-robot.component.scss']
})
export class LilRobotComponent implements AfterViewInit {

  public static robot_index: number = 0;

  public index: number = 0;

  public allowedColors: string[] = ['default', 'yellow', 'blue'];

  @Input()
  public size: number = 5;

  @Input()
  public initialState: RobotState;

  @Input()
  public isWildCard: boolean;

  @Input()
  public isEdge: boolean;

  @Input()
  public isInteractive: boolean = true;

  @Output()
  public onChange: EventEmitter<RobotState> = new EventEmitter();

  public headColor: string;
  public leftArmColor: string;
  public rightArmColor: string;
  public leftLegColor: string;
  public rightLegColor: string;
  public rightArmRaised: boolean;
  public leftArmRaised: boolean;

  constructor() {
    this.index = LilRobotComponent.robot_index;
    LilRobotComponent.robot_index += 1;
  }

  ngOnInit(): void {
    this.headColor = this.initialState?.headColor || "default";
    this.leftArmColor = this.initialState?.leftArmColor || "default";
    this.rightArmColor = this.initialState?.rightArmColor || "default";
    this.leftLegColor = this.initialState?.leftLegColor || "default";
    this.rightLegColor = this.initialState?.rightLegColor || "default";
    this.rightArmRaised = this.initialState?.rightArmRaised || false;
    this.leftArmRaised = this.initialState?.leftArmRaised || false;
    this.isWildCard = this.initialState?.matchAny || false;
  }

  ngAfterViewInit(): void {
    this.initMouseEvents();
  }

  public getRobotIndex(): number {
    return this.index;
  }

  public toRobotState(): RobotState {
    return {
      headColor: this.headColor,
      leftArmColor: this.leftArmColor,
      rightArmColor: this.rightArmColor,
      leftLegColor: this.leftLegColor,
      rightLegColor: this.rightLegColor,
      rightArmRaised: this.rightArmRaised,
      leftArmRaised: this.leftArmRaised,
      matchAny: this.isWildCard,
      isEdge: this.isEdge,
    } as RobotState;
  }


  public getColor(bodyPartColor: string): string {
    if (this.isWildCard) {
      return "black";
    } else if (this.isEdge) {
      return "rgb(170, 74, 68)";
    } else if (bodyPartColor == "default") {
      return "rgb(223, 231, 238)";
    } else {
      return bodyPartColor;
    }
  }

  public getHeadStyles(): any {
    return {
      background: this.getColor(this.headColor),
      width: 2 * this.size / 5 + "em",
      height: 3 * this.size / 10 + "em",
      "margin-left": 3 * this.size / 10 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public getBodyStyles(): any {
    return {
      background: this.getColor("default"),
      width: 2 * this.size / 3 + "em",
      height: this.size / 2 + "em",
      "margin-left": this.size / 6 + "em",
      "margin-top": -this.size / 40 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public getRightArmStyles(): any {
    return {
      background: this.getColor(this.rightArmColor),
      width: 2 * this.size / 15 + "em",
      height: this.size / 3 + "em",
      transform: this.rightArmRaised ? "rotate(45deg)" : "rotate(-45deg)",
      "margin-left": 8 * this.size / 10 + "em",
      "margin-top": this.rightArmRaised ? -2 * this.size / 3 + "em" : -this.size / 2.1 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public getLeftArmStyles(): any {
    return {
      background: this.getColor(this.leftArmColor),
      width: 2 * this.size / 15 + "em",
      height: this.size / 3 + "em",
      transform: this.leftArmRaised ? "rotate(-45deg)" : "rotate(45deg)",
      "margin-left": this.size / 12 + "em",
      "margin-top": this.rightArmRaised
        ? this.leftArmRaised
          ? -this.size / 3 + "em"
          : -this.size / 7 + "em"
        : this.leftArmRaised
          ? -this.size / 2 + "em"
          : -this.size / 3 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public getRightLegStyles(): any {
    return {
      background: this.getColor(this.rightLegColor),
      width: this.size / 5 + "em",
      height: this.size / 5 + "em",
      "margin-left": this.size / 4 + "em",
      "margin-top": this.leftArmRaised
        ? 2 * this.size / 7 + "em"
        : this.size / 10 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public getLeftLegStyles(): any {
    return {
      background: this.getColor(this.leftLegColor),
      width: this.size / 5 + "em",
      height: this.size / 5 + "em",
      "margin-left": 8 * this.size / 15 + "em",
      "margin-top": -this.size / 5 + "em",
      "border-radius": this.size / 20 + "em",
      "opacity": this.isWildCard || this.isEdge ? 0.5 : 1
    }
  }

  public clickHandler(element_id: string | undefined): void {
    if (element_id != undefined && this.isInteractive) {
      if (element_id.includes("head")) {
        let color_index = this.allowedColors.indexOf(this.headColor);
        this.headColor = this.allowedColors[(color_index + 1) % this.allowedColors.length];
        this.onChange.emit(this.toRobotState());
      } else if (element_id.includes("arm-r")) {
        let color_index = this.allowedColors.indexOf(this.rightArmColor);
        this.rightArmColor = this.allowedColors[(color_index + 1) % this.allowedColors.length];
        if (this.rightArmColor == 'default') {
          this.rightArmRaised = !this.rightArmRaised;
        }
        this.onChange.emit(this.toRobotState());
      } else if (element_id.includes("arm-l")) {
        let color_index = this.allowedColors.indexOf(this.leftArmColor);
        this.leftArmColor = this.allowedColors[(color_index + 1) % this.allowedColors.length];
        if (this.leftArmColor == 'default') {
          this.leftArmRaised = !this.leftArmRaised;
        }
        this.onChange.emit(this.toRobotState());
      } else if (element_id.includes("leg-r")) {
        let color_index = this.allowedColors.indexOf(this.rightLegColor);
        this.rightLegColor = this.allowedColors[(color_index + 1) % this.allowedColors.length];
        this.onChange.emit(this.toRobotState());
      } else if (element_id.includes("leg-l")) {
        let color_index = this.allowedColors.indexOf(this.leftLegColor);
        this.leftLegColor = this.allowedColors[(color_index + 1) % this.allowedColors.length];
        this.onChange.emit(this.toRobotState());
      }
    }
  }


  public initMouseEvents(): void {
    if (this.isInteractive) {
      let i = this.getRobotIndex();
      const headElement = document.querySelector('#head-' + i);
      const bodyElement = document.querySelector('#body-' + i);
      const rightArmElement = document.querySelector('#arm-r-' + i);
      const leftArmElement = document.querySelector('#arm-l-' + i);
      const rightLegElement = document.querySelector('#leg-r-' + i);
      const leftLegElement = document.querySelector('#leg-l-' + i);

      let eles = [headElement, bodyElement, rightArmElement, leftArmElement, rightLegElement, leftLegElement];
      for (let ele of eles) {
        ele?.addEventListener('mouseenter', (e) => {
          //@ts-ignore
          ele.style.border = '1px solid black';
        });
        ele?.addEventListener('mouseleave', (e) => {
          //@ts-ignore
          ele.style.border = '0px solid black';
        });

        ele?.addEventListener('click', (e) => {
          this.clickHandler(ele?.id);
        });
      }
    }
  }
}
