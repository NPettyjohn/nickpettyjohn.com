import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LanguageBarComponent } from '../language-bar/language-bar.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  // directives: [NavigationBarComponent]
})
export class LandingPageComponent implements OnInit {

  language: string = 'english'

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.Language.subscribe(
      (Language) => {this.language = Language;}
    );

  }

}
