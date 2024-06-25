import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = 'api/profiles';  // URL to web api

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        catchError(this.handleError<Profile[]>('getProfiles', []))
      );
  }

  updateProfile(profile: Profile): Observable<any> {
    const url = `${this.profilesUrl}/${profile.id}`;
    return this.http.put(url, profile, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProfile'))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
