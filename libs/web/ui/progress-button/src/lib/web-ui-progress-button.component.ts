import { Component, Input } from '@angular/core'
import { clear } from 'console'
import { interval } from 'rxjs'
import { Button } from '../../../../dev/feature/src/lib/dev-progress-button/dev-progress-button.component'

@Component({
  selector: 'ui-progress-button',
  template: `
    <span class="inline-flex rounded-md shadow-sm">
      <button
        *ngFor="let button of buttons; let i = index"
        type="button"
        class="inline-flex items-center mx-4 px-4 py-2 border 
          border-transparent text-base leading-6 font-medium rounded-md text-white bg-{{ button.color }}-600 
          hover:bg-{{ button.color }}-500 focus:border-none focus:outline-none active:bg-{{
          button.color
        }}-700 transition ease-in-out 
          duration-150 cursor-pointer"
        (click)="showProgress(button.id)"
      >
        <ng-container *ngIf="button.position == 'left'">
          <ui-icon
            [icon]="button.icon"
            [class]="'animate-spin -ml-1 mr-3 h-5 w-5 text-white'"
            *ngIf="button.showHide"
          ></ui-icon>
          {{ button.text }}
        </ng-container>
        <ng-container *ngIf="button.position == 'right'">
          {{ button.text }}
          <ui-icon
            [icon]="button.icon"
            [class]="'animate-spin -mr-1 ml-3 h-5 w-5 text-white'"
            *ngIf="button.showHide"
          ></ui-icon>
        </ng-container>
      </button>
    </span>
  `,
})
export class WebUiProgressButtonComponent {
  @Input() buttons: Button[]

  // declare the variables
  timesRun = 0
  interval: any

  showProgress(id: number) {
    // initial values for timesRun and clear the interval
    this.timesRun = 0
    clearInterval(this.interval)

    return this.buttons.map((button) => {
      if (button.id == id) {
        button.showHide = true
        // start the interval
        this.interval = setInterval(() => {
          this.timesRun += 1
          if (this.timesRun == 2) {
            clearInterval(this.interval)
            return (button.showHide = false)
          }
        }, 1000)
      }
    })
  }
}
