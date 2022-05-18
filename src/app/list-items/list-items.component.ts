import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  myData: any;
  constructor(private depHttp: HttpClient) {
    depHttp.get("https://reqres.in/api/users?page=2").
      subscribe((data) => { this.myData = data })

  }

  ngOnInit(): void {

  }

}
