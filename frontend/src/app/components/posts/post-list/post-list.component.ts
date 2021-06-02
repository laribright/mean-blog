import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostList implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSub: Subscription | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostsUpdateListener()
      .subscribe((post: Post[]) => (this.posts = post));
  }

  ngOnDestroy() {
    this.postSub?.unsubscribe();
  }
}
