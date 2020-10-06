import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList = new ContentList();
  content1: string;
  content2: string;
  content3: string;
  constructor() {
    this.contentList.addContentItem(0, 'Joshua Robinson', 'How to Succeed', 'You succeed by doing it.', null, null, null);
    this.contentList.addContentItem(1, 'Olivia Redfurd', '10 things', '1, 2, 3, 4, 5, 6, 7, 8, 9', null, null, null);
    this.contentList.addContentItem(2, 'Tyler Spencer', 'Doctors hate this one secrect', 'ssshhhh. Don\'t tell the doctors!',
      null, null, null);
    this.content1 = this.contentList.itemAtIndex(0);
    this.content2 = this.contentList.itemAtIndex(1);
    this.content3 = this.contentList.itemAtIndex(2);
  }
  ngOnInit(): void {
  }
}



