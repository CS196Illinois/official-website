import { Component, OnInit } from '@angular/core';
import * as data from './staff.json';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff = data.staff;
  constructor() { }

  ngOnInit() {
  }

}
