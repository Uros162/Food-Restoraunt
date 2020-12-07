import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma:FormGroup;
  fieldTextType:Boolean;
  constructor(private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.forma = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

    console.log(this.forma.invalid);
  }

  get f(){
    return this.forma.controls;
  }

  onSubmit(){

  }

  toggleTieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

}
