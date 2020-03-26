import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
