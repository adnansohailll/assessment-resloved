import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { PostsService } from 'src/app/services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  postDetail: any;
  userDetail: any = {
    address: {
      geo: ''
    },
    company: ''
  };

  constructor(public usersService: UsersService, public route: ActivatedRoute, public postService: PostsService) { }

  ngOnInit(): void {
    // Get user ID from URL parameter
    const userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetail(userId);
  }

  getUserDetail(userId: any) {
    this.usersService.getUserDetail(userId).subscribe(userDetail => {

      this.userDetail = userDetail;

      // Get how many Posts where created by current user
      this.postService.loadPosts().subscribe(posts => {
        var posts = posts.filter((post:any) => {
          return post.userId == userId;
        })
        
        this.userDetail['postCount'] = posts.length
      })

      console.log(this.userDetail);
    })
  }
}