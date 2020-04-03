import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  
  url = "www.brunobozz.com"
  image = "http://lorempixel.com/g/400/200"

  constructor() { }

  ngOnInit(): void {
  }

}
