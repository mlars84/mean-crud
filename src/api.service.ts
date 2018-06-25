import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap, map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned code ${error.status},
        body: ${error.error}`
      )
    }
    return throwError('Something bad happened; please try again later.');
  }

  private getData(res: Response) {
    let body = res
    return body || {}
  }

  getRoster(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.getData),
      catchError(this.handleError));
  }
  
  getPlayer(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.getData),
      catchError(this.handleError));
  }
  
  postPlayer(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updatePlayer(id: string, data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deletePlayer(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
