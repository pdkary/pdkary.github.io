import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  display: String;
  constructor(private router: Router) {
    this.display="Home";
    this.router.events.subscribe((event: NavigationEvent) => {
      if(event instanceof NavigationEnd){
        this.display = event.url[1].toUpperCase() + event.url.substring(2);
      }
    });
  }

  ngOnInit(): void {

  }

}
