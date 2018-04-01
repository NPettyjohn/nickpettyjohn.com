import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LanguageBarComponent } from '../language-bar/language-bar.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  language: string = 'english'

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.Language.subscribe(
      (Language) => {this.language = Language;}
    );

  }

}
