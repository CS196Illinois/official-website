import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public gUser = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  private auth2: gapi.auth2.GoogleAuth;

  constructor() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "408670202940-qiskbvt62ck6279s2379i6i8lde0u8hc.apps.googleusercontent.com",
      });
    });
  }

  public signIn() {
    this.auth2
      .signIn({})
      .then((user) => {
        this.gUser.next(user);
      })
      .catch(() => {
        this.gUser.next(null);
      });
  }

  public signOut() {
    this.auth2.signOut().then(() => {
      this.gUser.next(null);
    });
  }

  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.gUser.asObservable();
  }
}
