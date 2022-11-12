import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://jsonplaceholder.typicode.com';
  readonly moreParams =['test1','test2'];

  constructor(private http: HttpClient) { }

  // get request = READ

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  // Sending post request = CREATE

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  // Sending put request = UPDATE (whole data)

   updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
   }

  //  Sending patch request = UPDATE (specific data to be changed)
  patchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  // Sending delete request = DELETE 
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  // login(user: User): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, user);
  // }
  // signUp(user: User): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, user);
  // }
  
}
