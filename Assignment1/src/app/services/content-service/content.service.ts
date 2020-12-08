import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../../helper-files/content-interface';
import {CONTENT} from '../../helper-files/contentDB';
import {MessageService} from '../message-service/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getSpecificContent(id: number): Observable<Content> {
    return this.http.get<Content>('api/content/' + id);
  }
  getContent(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return this.http.get<Content[]>('api/content');
  }
  addContent(content: Content): Observable<Content> {
    this.messageService.add('Content added!');
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
}
