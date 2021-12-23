import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core'
@Component({
  selector: 'ui-countdown',
  template: `
    <span class="dark:text-white">
      {{ countDown }}
    </span>
  `,
})
export class WebUiCountdownComponent implements OnInit {
  @Input() delay?: number
  @Input() year?: number
  @Input() month?: number
  @Input() days?: number
  @Input() hours?: number
  @Input() minutes?: number
  @Input() seconds?: number
  @Input() countDown?: any
  @Input() mode?: boolean
  @Input() timestamp?: any
  @Output() expired: EventEmitter<any> = new EventEmitter()
  interval: any
  countSec: any = 1
  constructor() {
    if (!this.year) {
      this.year = 0
    }
    if (!this.month) {
      this.month = 0
    }
    if (!this.days) {
      this.days = 0
    }
    if (!this.hours) {
      this.hours = 0
    }
    if (!this.minutes) {
      this.minutes = 5
    }
    if (!this.seconds) {
      this.seconds = 0
    }
  }
  ngOnChanges() {
    this.ngOnInit()
  }
  ngOnInit() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.countSec == this.delay) {
        if (this.mode == false) {
          this.withoutTimeSpans()
        } else {
          this.withTimeSpan()
        }
      }
      this.countSec++
    }, 1000)
  }
  withoutTimeSpans() {
    var currentDate = new Date()
    currentDate.setFullYear(currentDate.getFullYear() + this.year)
    currentDate.setMonth(currentDate.getMonth() + this.month)
    currentDate.setDate(currentDate.getDate() + this.days)
    var countDownDate = new Date(
      currentDate.getTime() + this.hours * 60 * 60 * 1000 + this.minutes * 60000 + this.seconds * 1000,
    ).getTime()
    this.interval = setInterval(() => {
      var now = new Date().getTime()
      var distance = countDownDate - now
      this.countDown = this.calculation(distance)
      if (distance < 0) {
        clearInterval(this.interval)
        this.countDown = '00:00:00'
        //this.countDown = this.expired.emit('00:00:00')
      }
    }, 1000)
  }
  withTimeSpan() {
    this.interval = setInterval(() => {
      var now = new Date().getTime()
      var val = this.delay * 1000
      var distance = this.timestamp + val - now
      this.countDown = this.calculation(distance)
      if (distance < 0) {
        clearInterval(this.interval)
        this.countDown = '00:00:00'
        console.log(this.expired.emit())
        //this.expired.emit()
      }
    }, 1000)
  }
  calculation(distance) {
    var years = Math.floor(distance / 3.154e10)
    var distanceMinusYears = distance - years * 3.154e10
    var months = Math.floor(distance / 2.628e9) % 12
    var distanceMinusMonths = distanceMinusYears - months * 2.628e9
    var days = Math.floor(distanceMinusMonths / 8.64e7)
    var hours = Math.floor(distance / 3.6e6) % 24
    var mins = Math.floor(distance / 60000) % 60
    var secs = Math.floor(distance / 1000) % 60
    // return this.getDay(days) + this.getHour(hours) + this.getMinute(mins) + this.getSecond(secs)
    return (
      this.getYear(years) +
      this.getMonth(months) +
      this.getDay(days) +
      this.getHour(hours) +
      this.getMinute(mins) +
      this.getSecond(secs)
    )
  }
  getYear(year) {
    return year > 0 ? year + 'Y: ' : ''
  }
  getMonth(month) {
    return month > 0 ? month + 'M: ' : ''
  }
  getDay(days) {
    return days > 0 ? days + 'D: ' : ''
  }
  getHour(hour) {
    return hour > 0 ? hour + 'H: ' : ''
  }
  getMinute(mint) {
    return mint > 0 ? mint + 'Mi: ' : ''
  }
  getSecond(sec) {
    return sec > 0 ? sec + 'S' : ''
  }
}
