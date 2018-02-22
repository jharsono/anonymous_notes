import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes: any;
  constructor(private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router
  ){ }
  ngOnInit() {
    // this.getNotesFromService();
  }
  getNotesFromService(){ // define the function to get an observable and subscribe
    let observable = this._httpService.getAllNotes(); //getAllAuthors is invoked from http.service
    observable.subscribe(data => {
        console.log("Got our data!", data);
        this.notes = data; //put data into products objects
      }); // subscribe
    }
}
