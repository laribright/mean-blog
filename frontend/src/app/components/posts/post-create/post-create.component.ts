import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  constructor(private postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) return;

    const post: Post = {
      _id: Math.random(),
      title: form.value.title,
      content: form.value.content,
    };

    this.postsService.addPost(post);
    form.resetForm()
  }
}
