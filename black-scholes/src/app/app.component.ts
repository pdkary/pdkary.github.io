import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'black-scholes';
  opened: boolean;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.opened = true;
    this.matIconRegistry.addSvgIcon(
      'pingfloyd',
      this.domSanitizer.bypassSecurityTrustResourceUrl("https://raw.githubusercontent.com/pdkary/pingfloyd/gh-pages/assets/pingfloydlogo.svg")
    );
    if(window.outerHeight > window.outerWidth){
      this.opened=false;
    }
  }
  toggle_sidenav(){
    this.opened = !this.opened;
  }
}
