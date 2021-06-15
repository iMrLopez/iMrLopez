import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients: Array<Client>;
  imageObject: Array<object> = new Array<object>();

  constructor(private http: HttpClient) {
    this.http.get('../../assets/data/clients/clients.json').toPromise().then((response: Client[]) => {
      response.forEach((client) => {
        this.imageObject.push({
          image: client.image,
          thumbImage:  client.image,
          alt: `${client.name} ${client.description}`,
          title: `${client.name}`
        });
      });
    });

  }

  ngOnInit() {
  }

}
