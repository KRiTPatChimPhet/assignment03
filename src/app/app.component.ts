import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment03';
  itemCreated = true;
  values = 0;
  timeStamp = Array();
  dataTime = "";



  startTime() {
    this.itemCreated = false;
    let today = new Date();
    this.dataTime = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    this.timeStamp.push(this.dataTime);
    console.log(this.timeStamp);

  }
}
