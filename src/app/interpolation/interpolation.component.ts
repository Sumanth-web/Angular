import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name = 'Krishna'
  siteUrl = window.location.href

  constructor() { }

  ngOnInit(): void {
  }

  greetByName() {
    return "Welcome " + this.name;
  }

}
