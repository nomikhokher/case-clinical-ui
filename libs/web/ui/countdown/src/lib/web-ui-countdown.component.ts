import { Component, Input, OnInit, Output, OnChanges } from '@angular/core'
@Component({
  selector: 'ui-countdown',
  template: `
    <span class="dark:text-white">
      {{ countDown }}
    </span>
  `,
})
export class WebUiCountdownComponent implements OnInit {
  @Input() year?: number
  @Input() month?: number
  @Input() days?: number
  @Input() hours?: number
  @Input() minutes?: number
  @Input() seconds?: number
  @Input() countDown?: any
  @Input() mode?: boolean
  @Input() timestamp?: any

  interval: any

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
    console.log('chhaneged')
    this.ngOnInit()
  }
  ngOnInit() {
    clearInterval(this.interval)
    console.log(this.timestamp)
    if (this.mode == false) {
      //Without timestamp Start
      var currentDate = new Date()
      currentDate.setFullYear(currentDate.getFullYear() + this.year)
      currentDate.setMonth(currentDate.getMonth() + this.month)
      currentDate.setDate(currentDate.getDate() + this.days)

      var countDownDate = new Date(currentDate.getTime() + this.hours * 60 * 60 * 1000 + this.minutes * 60000).getTime()

      // Update the count down every 1 second
      this.interval = setInterval(() => {
        var now = new Date().getTime()

        // Find the distance between now and the count down date
        var distance = countDownDate - now

        var years = Math.floor(distance / 3.154e10)
        var distanceMinusYears = distance - years * 3.154e10
        var months = Math.floor(distance / 2.628e9) % 12
        var distanceMinusMonths = distanceMinusYears - months * 2.628e9
        var days = Math.floor(distanceMinusMonths / 8.64e7)
        var hours = Math.floor(distance / 3.6e6) % 24
        var mins = Math.floor(distance / 60000) % 60
        var secs = Math.floor(distance / 1000) % 60

        // Output the result in an element with id="demo"
        this.countDown =
          this.getYear(years) +
          this.getMonth(months) +
          this.getDay(days) +
          this.getHour(hours) +
          this.getMinute(mins) +
          this.getSecond(secs)

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(this.interval)
          this.countDown = '00:00:00'
        }
      }, 1000)
    } else {
      this.interval = setInterval(() => {
        var now = new Date().getTime()
        var distance = this.timestamp - now
        var years = Math.floor(distance / 3.154e10)
        var distanceMinusYears = distance - years * 3.154e10
        var months = Math.floor(distance / 2.628e9) % 12
        var distanceMinusMonths = distanceMinusYears - months * 2.628e9
        var days = Math.floor(distanceMinusMonths / 8.64e7)
        var hours = Math.floor(distance / 3.6e6) % 24
        var mins = Math.floor(distance / 60000) % 60
        var secs = Math.floor(distance / 1000) % 60
        this.countDown = this.getDay(days) + this.getHour(hours) + this.getMinute(mins) + this.getSecond(secs)
        if (distance < 0) {
          clearInterval(this.interval)
          this.countDown = '00:00:00'
        }
      }, 1000)
    }
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
