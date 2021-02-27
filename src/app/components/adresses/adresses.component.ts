import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {
  forma:FormGroup;
  addresses :string[];
  constructor(private fb: FormBuilder,private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      newAdress:['',Validators.required]
     
    })

    this.addresses = this.authService.currentUser.addresses
  }

 adresesOfCustomer(){
  return this.authService.currentUser.addresses;
  }

  addNewAddress(adress:string ){
    this.authService.currentUser.addresses.push(adress);
    console.log(this.addresses.indexOf(adress))
   
  }

  removeAdress(index:number){
    this.authService.getCurrentUser().addresses.splice(index,1);
  }

  onSubmit(){
    console.log(this.forma.get('newAdress').value);
    this.addNewAddress(this.forma.get('newAdress').value);
  }



}
