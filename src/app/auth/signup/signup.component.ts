import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  name: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService : AuthService,private route: Router ) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';

  }

  signup() {
    throw new Error('Method not implemented.');
    }

}