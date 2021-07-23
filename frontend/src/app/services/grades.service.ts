import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class GradesService {
  grades;
  user;
  constructor(private http: HttpClient, private LoginService: LoginService) {
    this.LoginService.observable().subscribe(user => {
      this.user = user;
    });
  }

  getGrades(): Observable<JSON> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.user.getAuthResponse().id_token
      })
    };
    this.grades = this.http.get<JSON>("http://127.0.0.1:5000/api", httpOptions);
    return this.grades;
  }

  public observable(): Observable<JSON> {
    return this.grades.asObservable();
  }
}
