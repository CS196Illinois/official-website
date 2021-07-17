import { Component, OnInit, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "src/app/services/login.service";
import { GradesService } from "src/app/services/grades.service";

@Component({
  selector: "app-grades",
  templateUrl: "./grades.component.html",
  styleUrls: ["./grades.component.scss"],
})
export class GradesComponent implements OnInit {
  //parse json data for grades
  homework_grades;
  attendance_grades;
  project_grades;
  extra_credit_grades;
  user;
  constructor(
    ngZone: NgZone,
    private http: HttpClient,
    private loginService: LoginService,
    private GradesService: GradesService
  ) {
    // window["onSignIn"] = (user) =>
    //   ngZone.run(() => {
    //     this.loginService.login(user);
    //   });
  }

  ngOnInit() {
    // // this.loginService.isSignedIn$.subscribe((data) => {
    // //   console.log(data);
    // //   if (data) {
    // //     this.displayGrades();
    // //   } else {
    // //     let title = document.querySelector("h1");
    // //     let table = <HTMLElement>document.querySelector(".Attendance");
    // //     table.style.display = "none";
    // //     title.style.marginTop = "10%";
    // //     title.style.fontSize = "24px";
    // //     title.textContent =
    // //       "Please sign in with your Google Illinois account to access your grades.";
    // //   }
    // // });
    if (this.GradesService.user) {
      console.log("this works");
      this.displayGrades();
    } else {
      let title = document.querySelector("h1");
      let table = <HTMLElement>document.querySelector(".Attendance");
      table.style.display = "none";
      title.style.marginTop = "10%";
      title.style.fontSize = "24px";
      title.textContent =
        "Please sign in with your Google Illinois account to access your grades.";
    }
  }

  displayGrades() {
    this.GradesService.getGrades().subscribe((data) => {
      var grades = JSON.parse(JSON.stringify(data));
      console.log(grades);
      this.homework_grades = grades.grades.filter(
        (item) => item.assignmentType == 3
      );
      this.attendance_grades = grades.grades.filter(
        (item) => item.assignmentType == 1
      );
      this.project_grades = grades.grades.filter(
        (item) => item.assignmentType == 2
      );
      this.extra_credit_grades = grades.grades.filter(
        (item) => item.assignmentType == 4
      );
      let message = document.querySelector("h5");
      message.textContent =
        "If you think there is a mistake with your grade, please contact the course staff.";
      message.style.marginTop = "2%";
    });
  }
}
