import { Injectable } from '@angular/core';
import { Paths } from '../enums/paths.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public navigationLinks = [
    {
      label: 'Home',
      href: ['', Paths.DASHBOARD, Paths.HOME],
      icon: 'home',
      isActive: false,
    },
    {
      label: 'Users',
      href: ['', Paths.DASHBOARD, Paths.USERS],
      icon: 'person',
      isActive: false,
    },
    {
      label: 'Alumns',
      href: ['', Paths.DASHBOARD, Paths.ALUMNS],
      icon: 'groups',
      isActive: true,
    },
    {
      label: 'Courses',
      href: ['', Paths.DASHBOARD, Paths.COURSES],
      icon: 'toc',
      isActive: false,
    },
  ];

  constructor(private router: Router) {}

  public setActivePath(): void {
    const path = this.router.url;
    for (const key in this.navigationLinks) {
      if (this.navigationLinks[key].href.join('/') === path) {
        this.navigationLinks[key].isActive = true;
      } else {
        this.navigationLinks[key].isActive = false;
      }
    }
    this.navigationLinks = [...this.navigationLinks];
  }
}
