import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public posts = [];

  private _jsonURL = 'assets/data/blog/blog.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
