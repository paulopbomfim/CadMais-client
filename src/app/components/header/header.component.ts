import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string = "currentRoute";

  constructor(private router: Router) {
    this.currentRoute = router.routerState.snapshot.url;
  }

  markPageHome(): string {
    if (this.currentRoute === "/") {
      return "home"
    }
    return ""
  }
  markPageContact(): string {
    if (this.currentRoute === "/contact") {
      return "contact"
    }
    return ""
  }
}
