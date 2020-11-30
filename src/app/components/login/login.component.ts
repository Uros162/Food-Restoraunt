import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  get f(){
    return this.forma.controls;
  }

  onSubmit(){

  }

}
