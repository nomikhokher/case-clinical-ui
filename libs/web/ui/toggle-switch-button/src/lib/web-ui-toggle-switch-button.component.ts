import { Component, Input } from '@angular/core'
import { Buttons } from '../../../../dev/feature/src/lib/dev-toggle-switch-button/dev-toggle-switch-button.component'

@Component({
  selector: 'ui-toggle-switch-button',
  styles: [
    `
      .shadow-toggle {
        box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.1), -1px 1px 4px 1px rgba(0, 0, 0, 0.06);
      }
    `,
    `
      .left-4 {
        left: 4%;
      }
    `,
    `
    .left-96 {
      left: 96%
    },
    `,
  ],
  template: `
    <div class="p-5">
      <div class="flex flex-col md:flex-row">
        <div class="flex-auto flex flex-col items-center h-64 mr-8">
          <ng-container *ngFor="let button of buttons">
            <div class="{{ button.divWidth }} relative my-1 cursor-pointer">
              <div
                class="{{ button.divHeight }} {{ button.divWidth }} rounded-full"
                (click)="Toggle(button.id)"
                [ngClass]="[button.onOff ? button.bgColor : 'bg-gray-300']"
              >
                <div
                  class="mt-1 -ml-6 {{ button.width }} {{
                    button.height
                  }} absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white shadow-toggle border-gray-300 top-0 "
                  [ngClass]="button.onOff ? button.left : 'left-6'"
                ></div>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  `,
})
export class WebUiToggleSwitchButtonComponent {
  @Input() buttons: Buttons[]

  Toggle(id: number) {
    return this.buttons.map((button) => {
      if (button.id == id) {
        if (button.onOff) {
          return (button.onOff = false)
        } else {
          return (button.onOff = true)
        }
      }
      return button.onOff
    })
  }
}
