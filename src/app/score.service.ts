import { Inject, Injectable, InjectionToken } from '@angular/core';

export const SS_BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  constructor(@Inject(SS_BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  getScoreByTopicUrl(topic_url_alias: string, topicQuestionsCount: number): number {
    let score_count = 0;
    for (const question_nr of Array.from(Array(topicQuestionsCount), (_, i) => i+1)) {
      let question_alias = `${topic_url_alias}/question_${question_nr}`;
      let answers = [];
      for (const answer_nr of Array(3).keys()) {
        let answer_alias = `${question_alias}/answer_${answer_nr}`
        answers.push(this.get(answer_alias));
      }
      if (answers.includes('correct')) {
        score_count += 2;
      }
      if (answers.includes('correct') && answers.includes('wrong')) {
        score_count -= 1;
      }
    }
    
    return score_count;
  }

  resetScoreByTopicUrl(topic_url_alias: string, topicQuestionsCount: number): void {
    for (const question_nr of Array.from(Array(topicQuestionsCount), (_, i) => i+1)) {
      let question_alias = `${topic_url_alias}/question_${question_nr}`;
      for (const answer_nr of Array(3).keys()) {
        let answer_alias = `${question_alias}/answer_${answer_nr+1}`
        this.remove(answer_alias);
      }
    }
  }

}
