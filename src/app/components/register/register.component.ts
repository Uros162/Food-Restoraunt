import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MastMatch } from '../helpers/mast-match.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  forma:FormGroup;
  fieldTextType:Boolean;
  constructor(private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.forma = this.fb.group({
      username:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      confrimPassword:['',Validators.required] 
    },
    {
      validator:MastMatch('password','confrimPassword')
    });
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
