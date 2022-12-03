import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  isMobile:boolean = false;
  projectPanelOpen: boolean;
  constructor() {
    this.projectPanelOpen = false;
    if(window.outerHeight > window.outerWidth){
      this.isMobile=true;
    }
   }

  ngOnInit(): void {
  }

}
