import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-progress-bar',
  template: `
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span
            [ngClass]="changeColor()"
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full cursor-pointer"
            (click)="start()"
          >
            Task in progress
          </span>
          <span
            [ngClass]="changeColor()"
            class="text-xs ml-2 font-semibold inline-block py-1 px-2 uppercase rounded-full cursor-pointer"
            (click)="pauseProgressBar()"
          >
            Task in pause
          </span>
        </div>
        <div class="text-right">
          <span
            class="text-xs font-semibold inline-block"
            [ngClass]="{
              'text-red-600': width < 40,
              'text-yellow-600': width > 40 && width < 80,
              'text-green-600': width > 80
            }"
          >
            {{ width }}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
        <div
          [ngStyle]="{ width: width + '%' }"
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
          [ngClass]="changeColor()"
        ></div>
      </div>
    </div>
  `,
})
export class WebUiProgressBarComponent {
  // declare the variables
  width = 0
  interval: any

  start() {
    // initial values for width and clear the interval
    this.width = 0
    clearInterval(this.interval)

    // start the interval
    this.interval = setInterval(() => {
      this.width += Math.floor(Math.random() * 5)

      if (this.width > 75 && this.width < 80) {
        clearInterval(this.interval)
      }
    }, 250)
  }

  // pause and complete the progress bar
  pauseProgressBar() {
    this.width += 100 - this.width
    clearInterval(this.interval)
  }

  // change the color of progress bar
  changeColor() {
    if (this.width < 40) {
      return 'bg-red-400 text-red-700'
    } else if (this.width < 80) {
      return 'bg-yellow-400 text-yellow-700'
    }
    return 'bg-green-400 text-green-700'
  }
}
