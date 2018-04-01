import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  Language: BehaviorSubject<string> = new BehaviorSubject('english');

  Questions: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient, private router: Router) {}

  // returnLanguage(): Observable<any[]> {
  //      return Observable.of(this.Language);
  //  }

  // getBanners(): Observable<any[]> {
  //      return this.banners;
  //  }

  returnLanguage(){
    return this.Language;
  }

  changeLanguage(language){
    // console.log(language)
    this.Language.next(language);

  }

  addNewEmail(email){
    console.log(email);
    // Add some code here to send the email to the server where it can be sent
    this._http.post('api/app/send_message', email).subscribe()
    


  }


}
