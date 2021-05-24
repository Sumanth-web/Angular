import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-binding]',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  message = ''
  name = 'Krishna'
  isDisabled = false;
  colorChange = false

  public colorClasses = {
    "text-success": this.colorChange,
    "text-warning": !this.colorChange
  }

  styling = {
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event: any) {
    console.log(event.target.value)
  }

  onClick(value: any) {
    this.isDisabled = !this.isDisabled
    this.message = "Welcome " + value
  }

  onChange() {
    console.log(this.colorChange)
    this.colorChange = !this.colorChange
  }

}
