import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ui-countdown',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <span class="font-mono text-6xl countdown">
          <span style="--value:60;">{{ countDown }}<span style="font-size: 16px;">sec</span></span>
        </span>
        <!-- <code>ui-countdown</code> -->
      </div>
    </div>
  `,
})
export class WebUiCountdownComponent implements OnInit {
  @Input() countDown?: number
  constructor() {
    if (!this.countDown) {
      this.countDown = 60
    }
  }
  ngOnInit() {
    let interval = setInterval(() => {
      this.countDown--
      if (this.countDown == 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
}
