import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
//import { Headers, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class LyricService {
  httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  }
  constructor(
    private http: HttpClient
  ) {}

  getLyrics( artist, title) {
    var searchUrl = `//localhost:5000/lyric`;
    console.log({artist, title})
    //console.debug(searchUrl)
    return this.http.put(searchUrl, {artist: artist, song: title},this.headers);//+'/?criteria='+encodeURIComponent(JSON.stringify(criteria)));
  };
}
