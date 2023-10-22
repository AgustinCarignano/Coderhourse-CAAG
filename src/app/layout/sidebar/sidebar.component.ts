import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public links = [
    {
      label: 'Using asyn pipe',
      href: '#',
      method: 'pipe',
      isActive: true,
    },
    {
      label: 'Component subscription',
      href: '#',
      method: 'subscription',
      isActive: false,
    },
    {
      label: 'Handle promises',
      href: '#',
      method: 'promises',
      isActive: false,
    },
  ];
  @Input() public showFiller!: boolean;
  public selectedMethod: string = 'pipe';

  public setMethod(method: string): void {
    this.links = this.links.map((l) => ({
      ...l,
      isActive: l.method === method,
    }));
    this.selectedMethod = method;
  }
}
