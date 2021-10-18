import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'ui-banners',
  template: `
    <div [ngClass]="position ? 'fixed inset-x-0 ' + position + '-0 z-10' : ''">
      <div class="bg-{{ bgColor }}-600 dark:bg-gray-600">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-{{ bgColor }}-800">
                <ui-icon [icon]="icon" [ngClass]="'h-6 w-6 text-white'"></ui-icon>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden"> We announced a new product! </span>
                <span class="hidden md:inline">
                  {{ text }}
                </span>
              </p>
            </div>
            <div class="order-3 mt-2 flex  justify-center w-full sm:order-2 sm:mt-0 sm:w-auto" *ngIf="buttons">
              <a
                *ngFor="let button of buttons; let i = index"
                href="javascript:void(0)"
                class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm mr-2 font-medium text-{{
                  button.textColor
                }}-200 bg-{{ button.bgColor }}-600 hover:bg-{{ button.bgColor }}-500"
              >
                {{ button.text }}
              </a>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 rounded-md hover:bg-{{
                  bgColor
                }}-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <ui-icon [icon]="'x'" [ngClass]="'h-6 w-6 text-white'"></ui-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiBannersComponent {
  @Input() text?: string
  @Input() bgColor?: string
  @Input() icon?: string
  @Input() position?: string
  @Input() buttons?: Button[]
}

interface Button {
  text?: string
  bgColor?: string
  textColor?: string
}
