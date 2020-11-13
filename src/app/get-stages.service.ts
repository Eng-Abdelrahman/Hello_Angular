import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const Url = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class GetStagesService {
// API path
private _GetStagesAPI = Url + "api/Stage/GetAllStages";
  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
         // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  }

  // Get New Requests By filter and paggination
  GetStages(): Observable<any> {
    console.log(Url)
    return this.http.get<any>(`${this._GetStagesAPI}`)
      .pipe(retry(2), catchError(this.handleError));
  }








    //to relode the table or data
    private _listners = new Subject<any>();
    listne(): Observable<any> {
      return this._listners.asObservable();
    }
    filter(filterBy: string) {
      this._listners.next(filterBy);
    }
}