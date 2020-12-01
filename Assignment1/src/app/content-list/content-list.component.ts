import {Component, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content-service/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [];
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(cl => this.contentList = cl);
  }

  searchByTitle(titleSearched: string): void {
    let found = false;
    this.contentList.forEach((item) => {
      if (item.title === titleSearched){
        found = true;
      }
    });
    if (found){
      console.log('It totally exists!');
    }else{
      console.log('It definitely does not exists. Trust me');
    }
  }

  addArticleToList(articleFromChild: Content): void {
    this.contentList.push(articleFromChild);
    this.contentList = Object.assign([], this.contentList);
  }
}
