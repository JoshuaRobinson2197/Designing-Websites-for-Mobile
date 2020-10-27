import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  content1: Content = {
    id: 0,
    author: 'Joshua Robinson',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/adventure-1807524_960_720.jpg',
    type: 'fluff',
    title: 'How to Succeed',
    body: 'You succeed by doing it.',
    tags: ['inspiring', 'educational']
  };
  content2: Content = {
    id: 1,
    author: 'Olivia Redfurd',
    imgUrl: 'https://cdn.pixabay.com/photo/2014/09/07/15/39/number-437928_960_720.jpg',
    type: 'fluff',
    title: '10 Things',
    body: '0,1,2,3,4,5,6,7,8,9',
    tags: ['personal', 'list']
  };
  content3: Content = {
    id: 2,
    author: 'Tyler Spencer',
    imgUrl: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/man-219928_960_720.jpg',
    type: 'fluff',
    title: 'Doctors Hate This One Secret',
    body: 'ssshhhh. Don\'t tell the doctors!',
    tags: ['medical', 'educational']
  };
  content4: Content = {
    id: 3,
    author: 'Jacob Jones',
    type: 'news',
    title: 'Best Sports Teams',
    body: 'They are all pretty good',
    tags: ['sports', 'statistics']
  };
  content5: Content = {
    id: 4,
    author: 'Rebecca Stone',
    imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
    type: 'news',
    title: 'The New Big Story',
    body: 'You wouldn\'t believe me even if I told you',
    tags: ['journalism', 'breaking-news']
  };
  constructor() {
  }

  ngOnInit(): void {
    this.contentList = [this.content1, this.content2, this.content3, this.content4, this.content5];
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
}
