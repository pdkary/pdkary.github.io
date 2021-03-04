import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  projectPanelOpen: boolean;
  constructor() {
    this.projectPanelOpen = false;
   }

  ngOnInit(): void {
  }

}
