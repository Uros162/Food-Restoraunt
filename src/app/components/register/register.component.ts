import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';
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
  errorExists:boolean;
  errorText:string;

  constructor(private fb: FormBuilder,private authService :AuthenticationService,private router:Router) { }
  

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
    var username = this.forma.get('username').value;
    var password = this.forma.get('password').value;

    if(!this.authService.getUser(username)){
      this.errorExists = false;
      var user = this.authService.registerUser(username,password);
      this.router.navigate(['/welcome']);
      console.log(AuthenticationService.dumyList);
    }else{
      this.errorExists = true;
      this.errorText = "The user with that username allredy exist";
      return;
    }
    
    
    

    
  }

  toggleTieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }


}
