import { Component, Output,Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  @Input() login:boolean;
  @Output()  colsinfLogin:EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

 

}
