import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LyricService {

  constructor(
    private http: HttpClient
  ) {}

  getLyrics() {
    return this.http.get('https://localhost3000/lyric');
  };
}
