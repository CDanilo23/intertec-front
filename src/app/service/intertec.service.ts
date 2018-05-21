import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IntertecService {

  constructor(private http: Http) { }

  getAvailableUserName(user: string): Observable<any>{
    let response = this.http.get('http://localhost:8010/user/'+user)
      .map(
        (res: Response) => {
          return res.json();
        }
      ); 
    return response;
  }
}
