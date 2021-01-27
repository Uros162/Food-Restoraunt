import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma:FormGroup;
  fieldTextType:Boolean;
  errorText:string;
  errorExists:boolean;
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router) { }
  

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
    var username = this.forma.get('username').value;
    var password = this.forma.get('password').value;

    var user = this.authService.login(username,password);

    if(!user){
      this.errorExists = true;
      this.errorText ="Passwor or Username ar incorrect";
      console.log(this.errorText);
      return;
    }
    console.log(user)
    this.errorExists = false;
    this.router.navigate(['/']);

    
  }

  toggleTieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

}
