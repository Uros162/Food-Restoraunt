import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MastMatch } from '../helpers/mast-match.validators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  forma:FormGroup;
  fieldTextType:Boolean;
  errorExists:boolean;
  errorText:string;
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
     

      newPassword:['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],

      oldPassword:['',Validators.required] 
    });

   console.log( this.returnCurrentUser())
  }

  returnCurrentUser(){
    return this.authService.getCurrentUser().username
  }
  toggleTieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  isEnteredCorrectPassword(input:string){
    return input == this.authService.getCurrentUser().password;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  onSubmit(){

    let oldPassword = this.forma.get('oldPassword').value;
    let newPassword = this.forma.get('newPassword').value
    if(this.isEnteredCorrectPassword(oldPassword)){
      this.authService.getCurrentUser().password = newPassword;
      console.log(this.authService.getCurrentUser());
      this.openSnackBar("Uspesno ste preomenili lozinku","");

    }else{
      this.errorExists = true;
      this.errorText = "password nije ispravan"
      return;
    }

  }

}
