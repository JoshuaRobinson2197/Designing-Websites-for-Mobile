import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newArticleEvent = new EventEmitter<Promise<unknown>>();
  newArticle: Content;
  tags: string;
  errorMessage: string;
  constructor() {
    this.newArticle = {
      id: 0,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: []
    };
  }

  ngOnInit(): void {
  }

  addContent(): void {
    this.newArticle.tags.push(this.tags);
    const addContentPromise = new Promise<Content>((success, fail) => {
      if (this.newArticle.id !== 0 && this.newArticle.author !== '' && this.newArticle.title !== '' && this.newArticle.body !== ''){
        const copiedNewArticle: Content = {
          id: 0,
          author: '',
          imgUrl: '',
          type: '',
          title: '',
          body: '',
          tags: []
        };
        copiedNewArticle.id = this.newArticle.id.valueOf();
        copiedNewArticle.author = this.newArticle.author.valueOf();
        copiedNewArticle.imgUrl = this.newArticle.imgUrl.valueOf();
        copiedNewArticle.type = this.newArticle.type.valueOf();
        copiedNewArticle.title = this.newArticle.title.valueOf();
        copiedNewArticle.body = this.newArticle.body.valueOf();
        copiedNewArticle.tags = [this.tags.valueOf()];
        this.newArticle.id = 0;
        this.newArticle.author = '';
        this.newArticle.imgUrl = '';
        this.newArticle.type = '';
        this.newArticle.title = '';
        this.newArticle.body = '';
        this.tags = '';
        this.errorMessage = '';
        success(copiedNewArticle);
      } else {
        this.errorMessage = 'Article failed to be added to list';
        fail(this.errorMessage);
      }
    });
    this.newArticleEvent.emit(addContentPromise);
  }

}
