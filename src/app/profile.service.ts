import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'api/profile';  // URL to web api

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.apiUrl);
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.http.put(this.apiUrl, profile);
  }
}
