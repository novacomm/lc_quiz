import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';

import { Question } from '../question';
import { QuestionService } from '../question.service';

import { SS_BROWSER_STORAGE, ScoreService } from '../score.service';
import { TS_BROWSER_STORAGE, ThemeService } from '../theme.service';
import { AdditionalLabelsService } from '../additional-labels.service';

import { Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.scss'],
  providers: [
    ThemeService,
    ScoreService,
    { provide: SS_BROWSER_STORAGE, useFactory: () => sessionStorage },
    { provide: TS_BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class ScorePanelComponent implements OnInit {
  topic: Topic;
  topicQuestionsCount: number;
  medal: string;
  topic_url_alias: string;
  questions: Question[];
  hideOutdatedContent: boolean = true;

  constructor(
    public additionalLabelsService: AdditionalLabelsService, 
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private topicService: TopicService,
    private scoreService: ScoreService,
    @Self() private sessionScoreService: ScoreService,
    @SkipSelf() private localScoreService: ScoreService,
    @Self() private sessionThemeService: ThemeService,
    @SkipSelf() private localThemeService: ThemeService,
  ) { 
    this.sessionThemeService.set('area', "score");
    this.topic_url_alias = this.route.snapshot.paramMap.get('topic_url_alias');
  }

  ngOnInit(): void {


    this.topicService.getTopicByURLAlias(this.topic_url_alias)
      .subscribe(topic => {
        this.topic = topic
        this.questions = [];

            this.questionService.getQuestions(this.topic.id).subscribe(result => {
              this.questions.push(result);
              
              let percentual_score = this.getPercentualScore();

              if (percentual_score >= 85) {
                this.medal = "gold";
              }
              else if (percentual_score < 85 && percentual_score >= 50) {
                this.medal = "silver";
              }
              else if (percentual_score < 50 && percentual_score >= 0) {
                this.medal = "bronze";
              }

              this.hideOutdatedContent = false;
            });
      });

    


  }

  getScore():number {
    // console.log(this.questions.length);
    // console.log(this.topic_url_alias);
    return this.scoreService.getScoreByTopicUrl(this.topic_url_alias, this.questions.length);
  }
  getPercentualScore():number {
    return this.getScore() / (this.questions.length * 2) * 100;
  }



}
