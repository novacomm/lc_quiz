import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Topic } from '../topic';
import { QuestionService } from '../question.service';
import { TopicService } from '../topic.service';
import { Self, SkipSelf } from '@angular/core';
import { TS_BROWSER_STORAGE, ThemeService } from '../theme.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  providers: [
    ThemeService,
    { provide: TS_BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class DashboardComponent implements OnInit {
  questions: Question[] = [];
  topics: Topic[] = [];
  quiz_homepage_body: String = "";
  window: any;

  constructor(
    private questionService: QuestionService,
    private topicService: TopicService,
    @Self() private sessionThemeService: ThemeService,
    @SkipSelf() private localThemeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
  ) { 
    this.window = this.document.defaultView;
    this.sessionThemeService.set('area', "dashboard");
    if (
      typeof this.window.drupalSettings !== 'undefined' &&
      typeof this.window.drupalSettings.lc_quiz !== 'undefined' &&
      typeof this.window.drupalSettings.lc_quiz.body !== 'undefined'
      ) {
      this.quiz_homepage_body = this.window.drupalSettings.lc_quiz.body;
    }
  }

  ngOnInit() {
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics()
      .subscribe(topics => this.topics = topics);
  }
}
