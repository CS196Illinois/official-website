import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/lectures.json';
import { faChalkboard, faVideo, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lectures-table',
  templateUrl: './lectures-table.component.html',
  styleUrls: ['./lectures-table.component.scss']
})
export class LecturesTableComponent implements OnInit {

  lectures = data.lectures;

  faChalkboard = faChalkboard;
  faVideo = faVideo;
  faCode = faCode
  faTimes = faTimes

  constructor() { }

  ngOnInit() {
  }

}
