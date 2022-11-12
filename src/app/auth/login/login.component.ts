import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string = '';
  password: string = '';
  role: string = '';


  roles: string[];

  constructor(private authService: AuthService, private route: Router) {
    this.roles =[
      'Admin',
      'Customer',
      'Seller'
    ]
   }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {
    throw new Error('Method not implemented.');
    }

}
