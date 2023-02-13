import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  PageRoute: string = "";

  constructor(router: Router) {
    this.PageRoute = router.routerState.snapshot.url;
  }
}
