import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { DataService } from '../data.service';

import { LanguageBarComponent } from '../language-bar/language-bar.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    language: string = 'english'

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.Language.subscribe(
      (Language) => {this.language = Language;}
    );

  }

}
