import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { Tirages } from './shared/models/tirages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loto';
  name = 'Angular';
  tirages: Tirages;
  dataSource = [];

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getTirages().subscribe(data => {
        this.tirages = data;
        // console.log(this.users);
        this.dataSource = data.records;
        console.log(this.dataSource);
      }
    );
    }

  firstClick() {
    this.data.firstClick();
  }

}
