import { Component, OnInit } from '@angular/core';
import { LyricService } from './../../services/lyric.service'

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  lyric
  constructor(
    private lyricService: LyricService,
  ) { }

  ngOnInit() {
    console.debug('I exist')
    this.lyricService.getLyrics("Sting", "Fields of Gold")
      .subscribe((data)=>{
        console.log(data);
        this.lyric = data['lyrics'];
    });
  }

}
