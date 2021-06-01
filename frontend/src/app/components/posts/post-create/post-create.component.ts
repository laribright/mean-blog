import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  @Output() newPost = new EventEmitter<Post>();

  enteredTitle: string = '';
  enteredContent: string = '';

  onSavePost() {
    const post: Post = { title: this.enteredTitle, content: this.enteredContent };
    this.newPost.emit(post);
  }
}
