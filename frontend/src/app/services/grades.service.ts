import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class GradesService {
  user: gapi.auth2.GoogleUser;
  grades = new ReplaySubject<JSON>(1);
  constructor(private http: HttpClient, private LoginService: LoginService) {
    this.LoginService.observable().subscribe(user => {
      this.user = user;
      // sign in
      if (this.user) this.fetch();
      // sign out
      if (!this.user) this.grades.next(null);
    });
  }

  public fetch() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: this.user.getAuthResponse().id_token
      })
    };
    this.http
      .get<JSON>("https://cs196.cs.illinois.edu/wsgi/api", httpOptions)
      .subscribe(res => {
        this.grades.next(res);
      });
  }

  public getGrades(): Observable<JSON> {
    return this.grades;
  }

  public observable(): Observable<JSON> {
    return this.grades.asObservable();
  }
}
