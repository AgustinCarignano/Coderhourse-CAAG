import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CAAG01';
  public showSidebar = true;

  toggleSidebar(): void {
    console.log('toggle');
    this.showSidebar = !this.showSidebar;
  }
}
