import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LyricsComponent } from './components/lyrics/lyrics.component';

const routes: Routes = [
  {path: 'lyrics', component: LyricsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
