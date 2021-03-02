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
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'pingfloyd',
      this.domSanitizer.bypassSecurityTrustResourceUrl("https://raw.githubusercontent.com/pdkary/pingfloyd/gh-pages/assets/pingfloydlogo.svg")
    );
  }
}
