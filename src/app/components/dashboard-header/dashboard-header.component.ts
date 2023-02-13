import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  PageRoute: string = "";

  constructor(private router: Router) {
    this.PageRoute = router.routerState.snapshot.url;
  }

  exit() {
    localStorage.removeItem("ReturnLogin");
    this.router.navigate(["/"])
  }
}
