import { Component, ViewEncapsulation } from '@angular/core';

import { Self, SkipSelf } from '@angular/core';
import { TS_BROWSER_STORAGE, ThemeService } from './theme.service';

@Component({
  selector: '.oe-quiz-wrapper',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
  './app.component.scss',
  ],
  providers: [
    ThemeService,
    { provide: TS_BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class AppComponent {
  title = 'Quiz';


  constructor(
    @Self() private sessionThemeService: ThemeService,
    @SkipSelf() private localThemeService: ThemeService,
    ) { 
  }



  getArea(): string {
    return this.sessionThemeService.get('area');
  }

  getColor(): string {
    switch(this.sessionThemeService.get('area')) { 
       case '0': { 
          return 'blue';
          break;
       } 
       case '1': { 
          return 'green';
          break;
       } 
       case '2': { 
          return 'orange';
          break;
       } 
       case '3': { 
          return 'violet';
          break;
       } 
       default: { 
          return 'white';
          break;
       } 
    } 
  }

}
