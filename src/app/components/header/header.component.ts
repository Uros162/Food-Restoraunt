import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:Boolean;
  constructor(private router : Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.authService.getCurrentUser().username)
  }

  getCurrentUserName(){
    this.authService.getCurrentUser().username;
    console.log(this.authService.getCurrentUser().username)
  }

  toogleLogin(){
    this.router.navigate(['/auth']);
  }

  isLogedin():boolean{
    return this.authService.isLogedin();

  }
}


