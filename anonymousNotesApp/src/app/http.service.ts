import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  // authorId: any;
    getAllNotes(){
     // our http response is an Observable, store it in a variable
     // let tempObservable = this._http.get('/tasks');
     // // subscribe to the Observable and provide the code we would like to do with our data from the response
     // tempObservable.subscribe(data => console.log("Got our tasks!", data));
     return this._http.get('/show-all');
   }

   new(note) {
     console.log("in the service: ", note)
     return this._http.post('/new', note);
   }
   //
   // getOneAuthor(id) {
   //      return this._http.get('/authors/' + id);
   //  }
   //
   // addQuote(id, quote) {
   //     let url = '/authors/' + id + '/quotes';
   //     return this._http.post(url, quote);
   // }
   //
   // returnAuthor(){
   //   return this._http.get(`/authors/${this.authorId}`);
   // }
   //
   // upvoteQuote(id, quote) {
   //     let url = '/authors/' + id + '/quotes/up';
   //     return this._http.put(url, quote);
   // }
   //
   // downvoteQuote(id, quote) {
   //     let url = '/authors/' + id + '/quotes/down';
   //     return this._http.put(url, quote);
   // }
   // update(author){
   //   console.log("about to edit: ", this.authorId)
   //   return this._http.put(`/update/${this.authorId}`, author);
   // }
   //  deleteQuote(id, index) {
   //      let url = '/authors/' + id + '/quotes/' + index;
   //      return this._http.delete(url);
   //  }
}
