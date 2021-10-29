import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable, from, of, throwError } from 'rxjs';
import { map, filter, find, first, concatMap, catchError } from 'rxjs/operators';

import { Topic } from './topic';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TopicService {
  window: any;
  api_endpoint: string;

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
  ) { 
    this.window = this.document.defaultView;
    // If the endpoint is not provided, use the development settings.
    // this.api_endpoint = 'http://web:8080/web/rest/api/quiz_en';
    this.api_endpoint = '';
    if ( typeof ((this.window.drupalSettings || {}).lc_quiz || {}).endpoint_url !== 'undefined' ) {
      this.api_endpoint = this.window.drupalSettings.lc_quiz.endpoint_url;
    }
  }

  

  getTopics(): Observable<Topic[]> {
    this.messageService.add('TopicService: fetched topics');
    var headers = new HttpHeaders({
        "Content-Type": "application/json", 
        "Accept": "application/json",
    })
    let results = this.http.get<Topic[]>(this.api_endpoint, {headers: headers}).
        pipe(
           map((topics: any) => {
             return topics.sections;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
    return results
  }

  getTopicByURLAlias(url_alias: string): Observable<Topic> {

    this.messageService.add(`TopicService: fetched topic url_alias=${url_alias}`);
    var headers = new HttpHeaders({
        "Content-Type": "application/json", 
        "Accept": "application/json",
    });
    let results = this.http.get<any>(this.api_endpoint, {headers: headers});

    return results.
        pipe(
         concatMap(data => {
           return from(data.sections)
         }),
         find((topic: any) => {
           let convertToSlug = function(text): string {
              return text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
            }
            return convertToSlug(topic.name) === url_alias;
             
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          }),
        );
  }
}
