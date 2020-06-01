import { Component, OnInit } from '@angular/core';
import { faChalkboard, faCode, faLock, faCog, faDesktop, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  faChalkboard = faChalkboard;
  faCode = faCode;
  faLock=faLock
  faCog = faCog;
  faDesktop = faDesktop;
  faCircle = faCircle
  constructor() { }

  ngOnInit() {
  }

}
