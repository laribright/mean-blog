import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private updatedPosts = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  // Fetching the posts from the database
  getPosts() {
    this.http
      .get<{ length: number; success: boolean; posts: Post[] }>(
        'http://localhost:8000/api/v1/posts'
      )
      .subscribe((post) => {
        this.posts = post.posts;
        this.updatedPosts.next({ ...this.posts });
      });
  }

  getPostsUpdateListener() {
    return this.updatedPosts.asObservable();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.updatedPosts.next(this.posts.slice());
  }
}
