import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  myData: Array<any>;
  
  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }

}
