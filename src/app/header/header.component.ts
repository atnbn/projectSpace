import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openDropDown: boolean = false;

  open() {
    this.openDropDown = true;
    console.log(this.openDropDown);
  }

  close() {
    this.openDropDown = false;
  }
}
