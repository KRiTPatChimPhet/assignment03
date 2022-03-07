import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment03';
  itemCreated = false;
  timeStamp = Array();
  dataTime = '';

  startTime() {
    this.itemCreated = true;
    let today = new Date();
    this.dataTime =
      'Date : ' +
      today.getDate() +
      ' Time : ' +
      today.getHours() +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds();
    this.timeStamp.push(this.dataTime);
  }

  getColor() {
    return "blue";
  }
}
