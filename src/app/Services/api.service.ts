import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Posts } from '../Models/posts';
import { Comments } from '../Models/comment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private readonly baseUrl ="https://jsonplaceholder.typicode.com"

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  //fetch user
  getUser(userId: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`)
  }

  //fetch user posts
  getUserPosts(userId: number): Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.baseUrl}/posts`,{params:{ userId: userId.toString()}})
  }

  //fetch comments on users' posts
  getPostsComments(postId: number): Observable<Comments[]>{
    return this.http.get<Comments[]>(`${this.baseUrl}/comments`,{params:{ postId: postId.toString()}})
  }
}
