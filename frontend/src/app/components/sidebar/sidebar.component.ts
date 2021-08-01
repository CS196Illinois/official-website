import { Component, OnInit, NgZone } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  user: gapi.auth2.GoogleUser;
  constructor(ngZone: NgZone, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.observable().subscribe((user) => {
      this.user = user;
    });
  }
}
