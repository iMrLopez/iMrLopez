import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public clients = [];

  private _jsonURL = 'assets/data/clients/clients.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.clients = data;
    });
  }

  ngOnInit(): void {
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }


}
