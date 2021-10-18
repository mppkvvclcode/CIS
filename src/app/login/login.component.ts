import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  //router
  //angular.giveMeRouter
  //Dependency Injection
  //constructor() { }

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {

    this.hardcodedAuthenticationService.logout();
  }
  handleLogin() {

    //    if(this.email==="amit"&& this.password==='Amit')
    if (this.hardcodedAuthenticationService.authenticate(this.email, this.password)) {
      console.log(this.email);
      console.log(this.password);

      //redirect to dashboard of dash user 
      this.router.navigate(['dash'])
      this.invalidLogin = false

    }
    else {

      this.invalidLogin = true
    }

  }


}
