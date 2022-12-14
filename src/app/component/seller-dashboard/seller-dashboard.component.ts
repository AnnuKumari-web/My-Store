import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
