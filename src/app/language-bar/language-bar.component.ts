import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent implements OnInit {

  language: string = 'english'

  changeLanguage(language){
    this.language = language

    console.log(this.language);

    this._dataService.changeLanguage(this.language);
  }

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
