import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loto';
  name = 'Angular';
  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
    }

  firstClick() {
    this.data.firstClick();
  }

}
