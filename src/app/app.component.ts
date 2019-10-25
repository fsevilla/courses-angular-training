import { Component } from '@angular/core';
import { SessionService } from './authentication/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses';

  constructor(private sessionService:SessionService) {
    this.sessionService.authenticated.subscribe(isAuthenticated => {
      console.log('Is authed', isAuthenticated);
    });
  }
}
