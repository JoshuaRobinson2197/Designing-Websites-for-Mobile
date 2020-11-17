import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../../helper-files/content-interface';
import {CONTENT} from '../../helper-files/contentDB';
import {MessageService} from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT);
  }
}
