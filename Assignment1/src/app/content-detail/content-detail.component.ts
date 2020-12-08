import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content-service/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id: number;
  article: Content = {
    id: null,
    author: '',
    imgUrl: '',
    type: '',
    title: '',
    body: '',
    tags: []
  };
  constructor(private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.contentService.getSpecificContent(this.id).subscribe(c => {
        this.article = c;
      });
    });
  }

}
