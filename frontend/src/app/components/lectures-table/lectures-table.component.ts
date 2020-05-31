import { Component, OnInit } from '@angular/core';
import * as data from './lectures.json';
import { faChalkboard, faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lectures-table',
  templateUrl: './lectures-table.component.html',
  styleUrls: ['./lectures-table.component.scss']
})
export class LecturesTableComponent implements OnInit {

  lectures = data.lectures;

  faChalkboard = faChalkboard;
  faVideo = faVideo;

  constructor() { }

  ngOnInit() {
  }

}
