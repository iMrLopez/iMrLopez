import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as converter from 'xml-js';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public posts = [];

  private _jsonURL = 'https://scrappy-php.herokuapp.com/?url=https://blog.marnylopez.com/feeds/posts/default';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(xml => {
      let result1 = converter.xml2json(xml, {compact: true, spaces: 2});
      let parsedFeed = JSON.parse(result1).feed.entry.map((a) => a.link.find((b) => b._attributes.rel === 'alternate'));
      this.posts = parsedFeed;
    });
  }

  ngOnInit(): void {
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL, { responseType: 'text' });
  }


}
