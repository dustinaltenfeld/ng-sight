import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesDataService {

  constructor(private _http: Http) { }

  getUsers(pageIndex: number, pageSize: number) {
    console.log('In Salesdata');
    return this._http.get('http://localhost:5000/api/user/pagewise/' + pageIndex + '/' + pageSize)
      .map(res => res.json());
  }

  getUserbyGender(n: number) {
    return this._http.get('http://localhost:5000/api/user/bygender/' + n)
      .map(res => res.json());
  }
}