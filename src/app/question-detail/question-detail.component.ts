import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Question } from '../question';
import { QuestionService } from '../question.service';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';

import { MessageService } from '../message.service';

import { SS_BROWSER_STORAGE, ScoreService } from '../score.service';
import { ThemeService } from '../theme.service';
import { AdditionalLabelsService } from '../additional-labels.service';

import { Self, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: [ './question-detail.component.scss' ],
  providers: [
    TopicService,
    ScoreService,
    ThemeService,
    { provide: SS_BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class QuestionDetailComponent implements OnInit {
  question: Question;
  questions: Question[] = [];
  topic: Topic;
  topics: Topic[];
  topicQuestionsCount: number;
  answers: { [key: string]: string; };
  answerKeyPrefix: string;
  showAnswer: boolean;
  answerInputEnabled: boolean;
  topic_url_alias: string;
  question_url_alias: string;
  showTryAgain: boolean;
  hideOutdatedContent: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private topicService: TopicService,
    private location: Location,
    private messageService: MessageService,
    @Self() private sessionScoreService: ScoreService,
    @SkipSelf() private localScoreService: ScoreService,
    @Self() private sessionThemeService: ThemeService,
    @SkipSelf() private localThemeService: ThemeService,
    public additionalLabelsService: AdditionalLabelsService, 
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
        params => {

          this.topic_url_alias = this.route.snapshot.paramMap.get('topic_url_alias');
          this.question_url_alias = this.route.snapshot.paramMap.get('question_url_alias');
          // this.sessionThemeService.set('area', this.topic_url_alias);
          this.showAnswer = false;
          this.showTryAgain = false;
          this.answerInputEnabled = true;
          this.answerKeyPrefix = this.topic_url_alias + '/' + this.question_url_alias + '/' + 'answer_';



          this.getTopics();
          
          

          if (this.correctFound()) {
            this.answerInputEnabled = false;
          }

        }
    );



    
  }


  getTopics(): void {
    this.topicService.getTopics()
    .subscribe(topics => {
      this.topics = topics;
      this.getTopic();
    });
  }

  getQuestions(): void {
    this.questions = [];
    this.questionService.getQuestions(this.topic.id).subscribe(result => {
      this.questions.push(result);
    });
    this.getQuestion();
  }


  getTopic(): void {
    const topic_url_alias = this.route.snapshot.paramMap.get('topic_url_alias');
    this.topicService.getTopicByURLAlias(topic_url_alias)
      .subscribe(topic => {
        this.topic = topic;
        let index = this.topics.map(function(A) {return A["id"];}).indexOf(this.topic.id);
        this.sessionThemeService.set('area', index.toString());
        this.getQuestions();
      });
  }

  goToNextQuestion():void {
    this.hideOutdatedContent = true;
    this.router.navigate(['../', 'question_' + (this.question.position + 1)], { relativeTo: this.route });
  }

  getQuestion(): void {
    const question_url_alias = this.route.snapshot.paramMap.get('question_url_alias');
    const topic_url_alias = this.route.snapshot.paramMap.get('topic_url_alias');
    this.questionService.getQuestionByURLAlias(this.topic.id, question_url_alias)
      .subscribe(question => {
        this.question = question;
        this.hideOutdatedContent = false;
      });
  }

  goBack(): void {
    this.location.back();
  }

  getTryCount(n): number {
    return this.getSession(this.answerKeyPrefix + (n + 1)) === null ? 0 : 1;
  }


  // getAnswerStatus(n): number {
  //   if (this.getSession(this.answerKeyPrefix + n) === null) {
  //     return '';
  //   }
  //   if (this.getSession(this.answerKeyPrefix + n) === null) {
  //     return '';
  //   }
  // }


  correctFound(): boolean {
    if (this.question != undefined) {
      for (const x of this.question.answers.keys()) {
        if (this.getSession(this.answerKeyPrefix + (x+1)) === 'correct') {
          return true;
        }
      }
    }
    return false;
  }

  getTriesCount(): number {
    return this.getTryCount(0) + this.getTryCount(1) + this.getTryCount(2);
  }

  openAnswer(): void {
    setTimeout(() => 
    {
        this.showAnswer = true;
    },
    1000);
    
  }

  closeAnswer(): void {
    this.showAnswer = false;
  }


  submitAnswer(submitted_answer): void {
    console.log(this.getTriesCount())
    if (this.getTriesCount() < 2 && !this.correctFound()) {
      let status = 'wrong';
      this.showTryAgain = true;
      if (this.question.answers[submitted_answer-1]['correct'] == "1") {
          status = 'correct';
          this.answerInputEnabled = false;
          this.openAnswer();
          this.showTryAgain = false;
      }
      this.setSession(this.answerKeyPrefix + submitted_answer, status);
    } 
    if (this.getTriesCount() == 2) {
      this.answerInputEnabled = false;
      this.showTryAgain = false;
      this.openAnswer();
    }
  }
  getStatus(answer_nr): Object {
    return {"text-box-icon": true, 'used': false};
  }

  getSession(key): string {
    return this.sessionScoreService.get(key);
  }
  setSession(key, value): void {
    this.sessionScoreService.set(key, value);
  }
  showResults(): void {
    this.router.navigate(['score'], { relativeTo: this.route });
  }

  getAnswerClasses(answerHash): string[] {
    const answer_class = this.getSession(answerHash) !== null ? this.getSession(answerHash) : '';
    let answer_classes = [
      answer_class, 
      'answer', 
      'ecl-u-mb-m', 
      'ecl-u-d-flex', 
      'ecl-u-align-items-center', 
      'ecl-u-pa-s', 
      'qcm--answer-list--answer',
      'ecl-u-type-paragraph', 
      'ecl-u-type-prolonged-l',
      ];
    
    let answers = [];
    if (this.question != undefined) {
      for (const x of this.question.answers.keys()) {
        answers.push(this.getSession(this.answerKeyPrefix + (x+1)));
      }
    }

    if (this.getTriesCount() > 1 || this.getSession(answerHash) !== null || answers.indexOf('correct') !== -1) {
      answer_classes.push('disabled');
    }
    return answer_classes;
  }

}
