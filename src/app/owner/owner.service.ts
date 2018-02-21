import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Owner } from './owner';

@Injectable()
export class OwnerService {

  private entity_url = environment.REST_API_URL + 'owners';

  constructor(private http: Http) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get(this.entity_url)
      .map((response: Response) => <Owner[]> response.json())
      .catch(this.handleError);
  }
  

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
