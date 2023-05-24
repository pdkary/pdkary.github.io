import { Component } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  public showContent: boolean = false;

  public toggleContent(): void {
    this.showContent = !this.showContent;
  }
}
