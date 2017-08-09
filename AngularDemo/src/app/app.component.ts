import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page-header">
      Your Bootstrap-enabled Angular 4 App is running in a single page!
    </div>
    <div>Router Outlet Target:</div>
    <div class="router-outlet">
      <router-outlet></router-outlet>
    </div>
    

  `,
  styles: []
})
export class AppComponent {
  
}
