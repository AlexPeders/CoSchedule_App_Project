import { Component, OnInit } from '@angular/core';
import { LyricService } from './../../services/lyric.service'

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  lyrics;
  constructor(
    private lyricService: LyricService,
  ) { }

  ngOnInit() {
    this.lyrics = this.lyricService.getLyrics();
  }

}
