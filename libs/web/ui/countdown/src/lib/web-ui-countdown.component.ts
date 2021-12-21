import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ui-countdown',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <span class="font-mono text-6xl countdown">
          <span class="dark:text-white">{{ countDown }}<span style="font-size: 16px;"></span></span>
        </span>
        <!-- <code>ui-countdown</code> -->
      </div>
    </div>
  `,
})
export class WebUiCountdownComponent implements OnInit {
  countDown?: any
  constructor() {
    if (!this.countDown) {
      var minutesToAdd = 30
      var currentDate = new Date()
      this.countDown = new Date(currentDate.getTime() + minutesToAdd * 30000).getTime()
      //this.countDown = "Jan 4, 2022 15:37:25";
    }
  }
  ngOnInit() {
    var minutesToAdd = 30
    var currentDate = new Date()
    var countDownDate = new Date(currentDate.getTime() + minutesToAdd * 30000).getTime()

    // Update the count down every 1 second
    var x = setInterval(() => {
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Calculations for days, hours, minutes and seconds
      //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Output the result in an element with id="demo"
      this.countDown = hours + ':' + minutes + ':' + seconds

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x)
        this.countDown = 'EXPIRED'
      }
    }, 1000)

    // let interval = setInterval(() => {
    //   this.countDown--
    //   if (this.countDown == 0) {
    //     clearInterval(interval)
    //   }
    // }, 1000)
  }
}
