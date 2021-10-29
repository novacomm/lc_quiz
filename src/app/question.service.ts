import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable, from, of, throwError } from 'rxjs';
import { map, filter, find, first, concatMap, catchError } from 'rxjs/operators';

import { Question } from './question';

import { Topic } from './topic';
import { TopicService } from './topic.service';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class QuestionService {
  window: any;
  api_endpoint: string;

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
  ) { 
    this.window = this.document.defaultView;
    this.api_endpoint = '';
    if ( typeof ((this.window.drupalSettings || {}).lc_quiz || {}).endpoint_url !== 'undefined' ) {
      this.api_endpoint = this.window.drupalSettings.lc_quiz.endpoint_url;
    }
  }

  getQuestions(topic_id): Observable<any> {
    var headers = new HttpHeaders({
        "Content-Type": "application/json", 
        "Accept": "application/json",
    })
    let params = new HttpParams();
    params = params.append('section', topic_id);
    let results = this.http.get<any>(this.api_endpoint, {headers: headers, params: params}).
        pipe(
           concatMap(data => {
            // Get last question.
            var last_question = data.questions.filter((question) => {
              return question.next_question == undefined
            })
            let sorted_questions = [last_question];
            let _continue = true;
            let before_question;
            let current_id = last_question[0].id;
            // Get previous questions until the first.
            while (_continue) {
              before_question = data.questions.filter((question) => {
                return question.next_question == current_id
              })
              if (before_question.length > 0) {
                current_id = before_question[0].id;
                sorted_questions.unshift(before_question);
              } else {
                _continue = false;
              }
            }
            data.questions = sorted_questions;
            
            data.questions.map( question => {
              question.position = data.questions.indexOf(question) + 1;
            })

            return from(data.questions)
          }),
           
        );
    return results
  }

 

  convertToSlug(text): string {
    return text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
  }


  getQuestionByURLAlias(topic_id: number, question_url_alias: string): Observable<Question> {
      
    var headers = new HttpHeaders({
        "Content-Type": "application/json", 
        "Accept": "application/json",
    })
    let params = new HttpParams();
    params = params.append('section', topic_id.toString());
    let results = this.http.get<any>(this.api_endpoint, {headers: headers, params: params}).
        pipe(
           concatMap(data => {
            
            var last_question = data.questions.filter((question) => {
              return question.next_question == undefined
            })
            let sorted_questions = last_question;
            let _continue = true;
            let before_question;
            let current_id = last_question[0].id;
            while (_continue) {
              before_question = data.questions.filter((question) => {
                return question.next_question == current_id
              })
              if (before_question.length > 0) {
                current_id = before_question[0].id;
                sorted_questions.unshift(before_question[0]);
              } else {
                _continue = false;
              }
            }
            sorted_questions.map( question => {
              question.position = sorted_questions.indexOf(question) + 1;
            })
            return from(sorted_questions)
          }),
           find((question: any) => {
             return (
              `question_${question.position}` === question_url_alias &&
              question.section == topic_id 
              );
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
    return results
          
  }
 
}
