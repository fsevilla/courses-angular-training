import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/authentication/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean = false;

  constructor(private sessionService:SessionService) {}

  ngOnInit() {
    this.sessionService.authenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

}
