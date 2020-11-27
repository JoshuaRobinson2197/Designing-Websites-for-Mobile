import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content-service/content.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newArticleEvent = new EventEmitter<Content>();
  newArticle: Content;
  tags: string;
  errorMessage: string;
  constructor(private contentService: ContentService) {
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
    let newArticleFromServer: Content;
    this.contentService.addContent(this.newArticle).subscribe(serverArticle => {
      newArticleFromServer = serverArticle;
      this.newArticleEvent.emit(newArticleFromServer);
    });
  }

}
