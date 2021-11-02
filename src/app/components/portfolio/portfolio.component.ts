import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public projects = [];

  private _jsonURL = 'assets/data/portfolio/projects.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.projects = data;
    });
  }

  ngOnInit(): void {
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
