import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from '../question';
import { QuestionService } from '../question.service';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';
import { MessageService } from '../message.service';
import { SS_BROWSER_STORAGE, ScoreService } from '../score.service';
import { AdditionalLabelsService } from '../additional-labels.service';

import { Self, SkipSelf } from '@angular/core';
import { TS_BROWSER_STORAGE, ThemeService } from '../theme.service';



@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: [ './topic-detail.component.scss' ],
  providers: [
    ThemeService,
    ScoreService,
    { provide: SS_BROWSER_STORAGE, useFactory: () => sessionStorage },
    { provide: TS_BROWSER_STORAGE, useFactory: () => sessionStorage },
  ]
})
export class TopicDetailComponent implements OnInit {
  topics: Topic[];
  topic: Topic;
  topic_url_alias: string;
  questions: Question[];
  hideOutdatedContent: boolean = true;

  constructor(
    public additionalLabelsService: AdditionalLabelsService, 
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private topicService: TopicService,
    private location: Location,
    private messageService: MessageService,
    private scoreService: ScoreService,
    @Self() private sessionScoreService: ScoreService,
    @SkipSelf() private localScoreService: ScoreService,
    @Self() private sessionThemeService: ThemeService,
    @SkipSelf() private localThemeService: ThemeService,
  ) {
    this.topic_url_alias = this.route.snapshot.paramMap.get('topic_url_alias');
    
  }

  ngOnInit(): void {
    
    this.getTopics();
        
  }

  getTopics(): void {
    this.topicService.getTopics()
    .subscribe(topics => {
      this.topics = topics;
      this.getTopic(this.topic_url_alias);
    });
  }


  getTopic(topic_url_alias): void {
    this.topicService.getTopicByURLAlias(topic_url_alias)
      .subscribe(topic => {
        this.topic = topic;
        let index = this.topics.map(function(A) {return A["id"];}).indexOf(this.topic.id);
        this.sessionThemeService.set('area', index.toString());

        this.questions = [];

        this.questionService.getQuestions(this.topic.id).subscribe(result => {
          this.questions.push(result);
        });
        this.hideOutdatedContent = false;
      });
  }

  goBack(): void {
    this.location.back();
  }

  startQuiz(): void {
    this.hideOutdatedContent = true;
    this.scoreService.resetScoreByTopicUrl(this.topic_url_alias, this.questions.length);
    this.router.navigate(['question_1'], { relativeTo: this.route });
  }

}
