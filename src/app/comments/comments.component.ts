import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '../Models/comment';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})

export class CommentsComponent implements OnInit {

  comments!: Comments[]
  id!: number
  @Input() postId!: number
  showComments = false

  constructor(private as: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.postId) {

      this.as.getPostsComments(this.postId).subscribe(comments => {
        this.comments = comments
      })

    }
  }


}

