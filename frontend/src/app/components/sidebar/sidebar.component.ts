import { Component, OnInit, NgZone } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(ngZone: NgZone, private loginService: LoginService) {}

  ngOnInit() {}
}
