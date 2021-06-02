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
        this.updatedPosts.next([...this.posts]);
      });
  }

  getPostsUpdateListener() {
    return this.updatedPosts.asObservable();
  }

  // Adding posts to the database
  addPost(post: Post) {
    this.http
      .post<{
        success: boolean;
        message: string;
        post: Post;
      }>('http://localhost:8000/api/v1/posts', post)
      .subscribe((responseData) => {
        const newPost = responseData.post;
        this.posts.push(newPost);
        this.updatedPosts.next(this.posts.slice());
      });
  }

  deletePost(id: string) {
    this.http
      .delete(`http://localhost:8000/api/v1/posts/${id}`)
      .subscribe((response) => {
        const newUpdatedPosts = this.posts.filter((post) => post._id !== id);
        this.posts = newUpdatedPosts;
        this.updatedPosts.next([...this.posts]);
      });
  }
}
