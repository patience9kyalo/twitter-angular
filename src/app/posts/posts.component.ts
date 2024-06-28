import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Posts } from '../Models/posts';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommentsComponent, CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts!: Posts[]
  id!: number
  postid!: number
  comments!:string
  showComments: { [key: number]: boolean } = {}

  constructor(private as: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.as.getUserPosts(1).subscribe(posts=>{
      this.posts = posts
    })
  }

  loadComments(postId: number): void {

    this.showComments[postId] = this.showComments[postId]

    
  }




}
