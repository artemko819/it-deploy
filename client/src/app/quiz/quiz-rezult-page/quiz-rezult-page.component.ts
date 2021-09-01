import {Component, OnInit, } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-rezult-page',
  templateUrl: './quiz-rezult-page.component.html',
  styleUrls: ['./quiz-rezult-page.component.css']
})
export class QuizRezultPageComponent implements OnInit {
  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Sep 28 2021 09:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

  constructor( ) { }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}
