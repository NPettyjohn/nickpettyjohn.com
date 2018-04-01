import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LanguageBarComponent } from '../language-bar/language-bar.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  language: string = 'english'
  message_submitted = false

  email: object = {
    sender: "",
    message: ""
  }

  addNewEmail(email){
      this.email = {
        sender: email.sender,
        message: email.message
      }
      // console.log("contact-me component says email is: " + this.email);
      this._dataService.addNewEmail(this.email);
      this.message_submitted = true;
    }

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.Language.subscribe(
      (Language) => {this.language = Language;}
    );

  }

}
