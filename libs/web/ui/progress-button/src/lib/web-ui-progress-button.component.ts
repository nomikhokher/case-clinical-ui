import { Component, Input } from '@angular/core'
import { Button } from '../../../../dev/feature/src/lib/dev-progress-button/model/index'

@Component({
  selector: 'ui-progress-button',
  template: `
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        class="inline-flex items-center mx-4 px-4 py-2 border 
          border-transparent text-base leading-6 font-medium rounded-md text-white bg-{{ color }}-600 
          hover:bg-{{ color }}-500 focus:border-none focus:outline-none active:bg-{{
          color
        }}-700 transition ease-in-out 
          duration-150 cursor-pointer"
        (click)="showProgress(id)"
      >
        <ng-container *ngIf="position == 'left'">
          <ui-icon [icon]="icon" [class]="'animate-spin -ml-1 mr-3 h-5 w-5 text-white'" *ngIf="showHide"></ui-icon>
          {{ text }}
        </ng-container>
        <ng-container *ngIf="position == 'right'">
          {{ text }}
          <ui-icon [icon]="icon" [class]="'animate-spin -mr-1 ml-3 h-5 w-5 text-white'" *ngIf="showHide"></ui-icon>
        </ng-container>
      </button>
    </span>
  `,
})
export class WebUiProgressButtonComponent {
  @Input() id: number
  @Input() text?: string
  @Input() color?: string
  @Input() icon?: string
  @Input() position?: string

  showHide: boolean = false

  // declare the variables
  timesRun = 0
  interval: any

  showProgress(val: number) {
    // initial values for timesRun and clear the interval
    this.timesRun = 0
    clearInterval(this.interval)
    if (val == this.id) {
      this.showHide = true
      // start the interval
      this.interval = setInterval(() => {
        this.timesRun += 1
        if (this.timesRun == 2) {
          clearInterval(this.interval)
          return (this.showHide = false)
        }
      }, 1000)
    }
  }
}
