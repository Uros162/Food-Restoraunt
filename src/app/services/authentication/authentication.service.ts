import { Router } from '@angular/router';

import { Injectable } from '@angular/core';

import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: Customer ;
  logedIn: boolean=false;
  constructor(private router:Router) { }



  static dumyList: Array<Customer> = [
    {
      id: 1,
      username: 'abc@gmail.com',
      password: 'singi555555',
      addresses:['jovanke Radakovic']

    },
    {
      id: 2,
      username: 'abcq@gmail.com',
      password: 'dingi555555',
      addresses:['jovanke Radakovic']

    }
  ]

  getUserName(user: Customer): string {
    return user.username;
  }

  getUserById(id: number) {
    var foundUser: Customer;

    AuthenticationService.dumyList.forEach(user => {
      if (user.id == id) {
        foundUser = user;
      }
    });
    this.currentUser = foundUser
    return foundUser;
  }

  getUser(username: string): Customer {
    this.currentUser = AuthenticationService.dumyList.find(userToFind => userToFind.username == username);
    return this.currentUser;
  }

  getCurrentUser():Customer{
    return this.currentUser;
  }

  login(username: string, password: string): Customer {

    var user = this.getUser(username);
    var isPasswordcorect = this.isPasswordCorect(username, password);

    if (user && isPasswordcorect) {
      this.logedIn = true;
      return user;
      
    } else {
      console.log("ne postoji user service");
      this.logedIn = false;
      return;
    }
  }

  isLogedin(): boolean {
    return this.logedIn;
  }

  logout(){
    this.currentUser = null;
    this.logedIn = false;
    this.router.navigate(['/welcome']);
  }

  isPasswordCorect(username: string, password: string): boolean {
    return AuthenticationService.dumyList.find(userToFind =>
      (userToFind.username == username && userToFind.password == password)) != undefined;
  }

  registerUser(username: string, password: string,adress:string): Customer {
    var maxid: number = 0;
    AuthenticationService.dumyList.forEach(user => {
      if (maxid < user.id) {
        maxid = user.id;
      }
    })

    var id = ++maxid;

    var addresses:Array<string> =[];
    addresses.push(adress);
    var user: Customer = { id, username, password ,addresses};
    AuthenticationService.dumyList.push(user);


    console.log(AuthenticationService.dumyList);
    this.logedIn = true;
    this.currentUser = user;
    return user;
  }


}
