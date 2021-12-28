import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  // postDetail: any;
  userDetail: any = {};

  constructor(public postService:PostsService, public usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.getPostDetail(postId);
  }

  getPostDetail(PostId: any) {
    this.postService.loadPostDetail(PostId).subscribe(postDetail => {
      // this.postDetail = postDetail;
     
      this.usersService.getUserDetail(postDetail.userId).subscribe(userDetail => {
        this.userDetail = userDetail;
      })
    })
  }

}
