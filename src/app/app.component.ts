import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  loging:Boolean;
  
  constructor(private router : Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
   this.router.navigate(['/welcome']);
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
