import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-toggle-switch-button',
  styles: [
    `
      .shadow-toggle {
        box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.1), -1px 1px 4px 1px rgba(0, 0, 0, 0.06);
      }
    `,
    `
      .left-6 {
        left: 6%;
      }
    `,
    `
    .left-94 {
      left: 94%;
    },
    `,
  ],
  template: `
    <div class="p-5">
      <div class="flex flex-col md:flex-row">
        <div class="flex-auto flex flex-col items-center mr-8">
          <ng-container>
            <div class="{{ button.divWidth }} relative my-1 cursor-pointer">
              <div
                class="{{ button.divHeight }} {{ button.divWidth }} rounded-full"
                (click)="toggle(button.id)"
                [ngClass]="[
                  button.onOff == true || button.onOff == 'true' ? 'bg-' + button.bgColor + '-600' : 'bg-gray-300'
                ]"
              >
                <div
                  class="mt-1 -ml-6 {{ button.width }} {{
                    button.height
                  }} absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white shadow-toggle border-gray-300 top-0 "
                  [ngClass]="button.onOff == true || button.onOff == 'true' ? button.left : 'left-6'"
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
  @Input() button: StoreToggleSwitchButton

  toggle(id: number) {
    if (this.button.id == id) {
      if (this.button.onOff) {
        return (this.button.onOff = false)
      } else {
        return (this.button.onOff = true)
      }
    }
    return this.button.onOff
  }
}

interface StoreToggleSwitchButton {
  id?: number
  height: string
  width: string
  left: string
  bgColor: string
  divWidth: string
  divHeight: string
  onOff: boolean | string
}
