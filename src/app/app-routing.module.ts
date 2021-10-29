import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { ScorePanelComponent } from './score-panel/score-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'topic/:topic_url_alias', component: TopicDetailComponent },
  { path: 'topic/:topic_url_alias/score', component: ScorePanelComponent },
  { path: 'topic/:topic_url_alias/:question_url_alias', component: QuestionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { 
    useHash: true, 
    onSameUrlNavigation: 'reload', 
    urlUpdateStrategy: 'eager' 
  }) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}
