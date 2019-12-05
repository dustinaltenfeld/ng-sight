import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesDataService {

  constructor(private _http: Http) { }

  getUsers(pageIndex: number, pageSize: number) {
    return this._http.get('https://localhost:5001/api/user/pagewise/'+ pageIndex + '/' + pageSize)
      .map(res => res.json());
  }


}