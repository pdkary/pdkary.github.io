import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parker Kary';
  opened: boolean;
  isMobile=false;
  pageHeight: string = "55em";
  constructor() {
    this.opened = true;
    if(window.outerHeight > window.outerWidth){
      this.opened=false;
      this.isMobile=true;
      this.pageHeight = "300em";
    }
  }
  toggle_sidenav(){
    this.opened = !this.opened;
  }
}
