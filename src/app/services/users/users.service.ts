import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  // Get all users
  getUsers() {
    // Add a request to get users using `endpoint`
    return this.http.get(this.endpoint)
  }

  // Get detail of a user by user ID
  getUserDetail(userId: any) {
     // Add a request to get posts using `endpoint`
     return this.http.get(this.endpoint + '/' + userId)
  }
}
