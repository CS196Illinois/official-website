import { ChangeDetectorRef, Component } from "@angular/core";
import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "website2020";
  user: gapi.auth2.GoogleUser;

  constructor(
    private LoginService: LoginService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.LoginService.observable().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
    });
  }

  signIn() {
    this.LoginService.signIn();
  }

  signOut() {
    this.LoginService.signOut();
  }
}
