import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobileLayout = false
  constructor() { }

  ngOnInit() {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 559;
  }

}
