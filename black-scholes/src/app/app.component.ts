import { stringify } from '@angular/compiler/src/util';
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
  isMobile=false;
  pageHeight: string = "55em";
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.opened = true;
    this.matIconRegistry.addSvgIcon(
      'pingfloyd',
      this.domSanitizer.bypassSecurityTrustResourceUrl("https://raw.githubusercontent.com/pdkary/pdkary.github.io/gh-pages/assets/pingfloydlogo.svg")
    );
    if(window.outerHeight > window.outerWidth){
      this.opened=false;
      this.isMobile=true;
      this.pageHeight = "100em";
    }
  }
  toggle_sidenav(){
    this.opened = !this.opened;
  }
}
