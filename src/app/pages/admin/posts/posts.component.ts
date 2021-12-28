import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.loadPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    })
  }

}