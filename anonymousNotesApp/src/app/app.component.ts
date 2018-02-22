import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = {text: ''};
  notes: any;
  constructor(private router: Router, private _httpService: HttpService, private route: ActivatedRoute) {
  }

ngOnInit() {
  this.notes = {};
  this.getNotesFromService();
}
    addNote() {
      console.log("NEW NOTE: ", this.note)
        let observable = this._httpService.new(this.note);
        observable.subscribe(data => {
            console.log(data)
              this.getNotesFromService();
              this.note.text = ""
        });
    }
    getNotesFromService(){ // define the function to get an observable and subscribe
      let observable = this._httpService.getAllNotes(); //getAllAuthors is invoked from http.service
      observable.subscribe(data => {
          console.log("Got our data!", data);
          this.notes = data; //put data into products objects
        }); // subscribe
      }


}
