import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loto';
  name = 'Angular';
  users: object;
  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
    }

  firstClick() {
    this.data.firstClick();
  }

}
