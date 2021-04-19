import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../../../assets/test_grades.json'


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  //parse json data for grades
  homework_grades = data.grades.filter((item) => item.assignmentType == 'Homework');
  attendance_grades = data.grades.filter((item) => item.assignmentType == 'Attendance');
  project_grades = data.grades.filter((item) => item.assignmentType == 'Project');
  extra_credit_grades = data.grades.filter((item) => item.assignmentType == 'Extra Credit');

  constructor(private http: HttpClient) { }

  
  ngOnInit() {
    this.http.get('http://127.0.0.1:5000/api').subscribe(data => {
    var test = JSON.parse(JSON.stringify(data))
    this.homework_grades = test.grades.filter((item) => item.assignmentType == 'Homework');
    this.attendance_grades = test.grades.filter((item) => item.assignmentType == 'Attendance');
    this.project_grades = test.grades.filter((item) => item.assignmentType == 'Project');
    this.extra_credit_grades = test.grades.filter((item) => item.assignmentType == 'Extra Credit');

  });
}


}
