import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MyStore';
  private user: any = {
    id: 2,
    name: 'Agatha Christie',
    username: 'John',
    email: 'sole@april.biz',
  };
  
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
    this.onCreateUser();
    this.onUpdateUser();
    this.onPatchUser();
    this.onDeleteUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe({
      next(response) {
        console.table(response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done getting users');
      },
    });
  }

  onGetUser(): void {
    this.userService.getUser().subscribe({
      next(response) {
        console.log(response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done getting user');
      },
    });
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe({
      next(response) {
        console.log(response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done creating user');
      },
    });
  }

  onUpdateUser():void {
    this.userService.updateUser(this.user).subscribe({
      next(response) {
        console.log(response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done updating user');
      },
    }
    );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe({
      next(response) {
        console.log(response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done patching user');
      },
    });
  }

  onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe({
      next(response) {
        console.log('Response from delete: ', response);
      },
      error(error: any) {
        console.log(error);
      },
      complete() {
        console.log('Done deleting user');
      },
    });
  }
}
