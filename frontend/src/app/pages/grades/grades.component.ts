import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { GradesService } from "src/app/services/grades.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-grades",
  templateUrl: "./grades.component.html",
  styleUrls: ["./grades.component.scss"]
})
export class GradesComponent implements OnInit {
  grades;
  homework_grades;
  attendance_grades;
  project_grades;
  extra_credit_grades;
  name;
  user: gapi.auth2.GoogleUser;
  flag: boolean = false;
  constructor(
    private GradesService: GradesService,
    private LoginService: LoginService,
    private ref: ChangeDetectorRef,
    private NgZone: NgZone
  ) {}
  isSignedIn: boolean = false;
  isIllini: boolean = true;
  ngOnInit() {
    this.LoginService.observable().subscribe(user => {
      this.user = user;
      this.ref.detectChanges();
      this.GradesService.getGrades().subscribe(data => {
        this.grades = data;
        this.NgZone.run(() => {
          this.displayGrades(this.grades);
        });
      });
    });
  }

  displayGrades(data) {
    if (
      this.user
        .getBasicProfile()
        .getEmail()
        .match("(?<=@)[^.]+(?=.)")[0] !== "illinois"
    ) {
      this.isIllini = false;
    }
    this.name = this.user.getBasicProfile().getGivenName();
    var grades = JSON.parse(JSON.stringify(data));
    this.homework_grades = grades.grades.filter(
      item => item.assignmentType == 3
    );
    this.attendance_grades = grades.grades.filter(
      item => item.assignmentType == 1
    );
    this.project_grades = grades.grades.filter(
      item => item.assignmentType == 2
    );
    this.extra_credit_grades = grades.grades.filter(
      item => item.assignmentType == 4
    );
  }
}
