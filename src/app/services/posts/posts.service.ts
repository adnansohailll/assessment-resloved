import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private endpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  // Get all posts
  loadPosts(): Observable<any> {
    // Add a request to get posts using `endpoint`
    return this.http.get(this.endpoint)
  }

  // Get detail of a post by post ID
  loadPostDetail(postId: string): Observable<any> {
    // Add a request to get posts using `endpoint`
    return this.http.get(this.endpoint + '/' + postId)
  }
  
}
