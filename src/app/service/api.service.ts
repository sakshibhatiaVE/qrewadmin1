import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:4000/api';
  baseUri1: string = 'http://localhost:4000/api/getroles';
  baseUri2: string = 'http://localhost:4000/api/announcements';

  // baseUri: string = 'http://54.211.219.74:4000/api';
  // baseUri1: string = 'http://54.211.219.74:4000/api/getroles';
  // baseUri2: string = 'http://54.211.219.74:4000/api/announcements';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Create role
  createRole(data): Observable<any> {
    let url = `${this.baseUri}/create1`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Create Announcement
  createAnnouncement(data): Observable<any> {
    console.log(data);
    let url = `${this.baseUri}/create2`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get all users
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get all roles
  getRoles() {
     console.log(this.http.get(`${this.baseUri1}`));
    return this.http.get(`${this.baseUri1}`);
  }

  // Get all Announcement
  getAnnouncements() {
    // console.log("front", this.http.get(`${this.baseUri}`));
   return this.http.get(`${this.baseUri2}`);
 }

  // Get user
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Get userprofile
  getUser(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Get role
  getRole(id): Observable<any> {
    let url = `${this.baseUri}/read1/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Get Announcement
  getAnnouncement(id): Observable<any> {
    let url = `${this.baseUri}/read2/${id}`;
    console.log(" Get Announcement url ", url);
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update user
  updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Update user profile
  updateUser(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Update role
  updateRole(id, data): Observable<any> {
    let url = `${this.baseUri}/update1/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Update role
  updateAnnouncement(id, data): Observable<any> {
    let url = `${this.baseUri}/update2/${id}`;
    console.log(" Update Announcement url ", url);
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete user
  deleteEmployee(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete role
  deleteRole(id): Observable<any> {
    let url = `${this.baseUri}/delete1/${id}`;
    console.log("url", url);
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete Announcement
  deleteAnnouncement(id): Observable<any> {
    let url = `${this.baseUri}/delete2/${id}`;
    console.log("url", url);
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
