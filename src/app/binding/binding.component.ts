import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-binding]',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name = 'Krishna'
  isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isDisabled = !this.isDisabled
  }

}
