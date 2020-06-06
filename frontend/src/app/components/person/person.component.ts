import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() picture: string;
  @Input() bio: string;

  constructor() { }

  ngOnInit() {
  }

}
