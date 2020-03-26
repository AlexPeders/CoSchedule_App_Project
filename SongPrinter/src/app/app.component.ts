import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SongPrinter';
  /*constructor(private http: HttpClient){
    //onsole.log('Hello fellow user');
    this.getContacts();
    this.getData();
  }*/

/*getData(){
    return this.http.get(this.apiUrl)
      .then((res:Response)=> res.json())
  }
  getContacts(){
    this.getData().subscribe(data=> {
      console.log(data);
      this.data = data
    })
  }*/
}
