import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../../team.service';
import { Router } from "@angular/router";
import {LocalStorageService} from '../../services/local-storage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private teamService: TeamService, public router: Router, private lclstrg:LocalStorageService) { }

  ngOnInit() {
  }

  submitted;

  // reactive Login form 
  loginForm = this.fb.group({
    email: ['saral@jungleworks.com', [Validators.required,Validators.email]],
    password: ['123456', [Validators.required]]
  });

  lgn() {
    alert("le chk m aa gya ");
    this.router.navigate(['/private/team']);
  }
  // login function
  login() {
    this.submitted = true;

    if (this.loginForm.invalid)
    {
      return;
    }

    this.teamService.login(this.loginForm.value).subscribe(response => {
      // console.log(response);
      if (response && response.status == 200) {
        this.lclstrg.setlocalstorage(response.body.access_token);
        this.router.navigate(['/private/team']);
      }
      else {
        alert("email or password is incorrect");
        console.log("Invalid user");
        alert("invalid user");
      }
    });
  }

}
