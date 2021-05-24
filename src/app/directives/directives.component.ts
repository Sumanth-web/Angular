import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  success: boolean = false
  colorCase: string = 'green'
  numbers = [1, 2, 3, 4, 5]
  colors = ['red','green','blue']

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.success = !this.success
  }

}
