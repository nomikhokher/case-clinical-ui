import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-accordion',
  template: `
    <div class="w-full my-4">
      <div class="rounded-sm" *ngFor="let accordion of accordions">
        <div class="border bg-gray-100 px-10 py-6 dark:bg-gray-800">
          <button
            (click)="accordion.show = !accordion.show"
            class="text-gray-900 dark:text-white hover:text-gray-700 focus:outline-none"
            type="button"
          >
            <div class="flex">
              <ui-icon
                *ngIf="accordion.icon"
                [icon]="accordion.icon"
                size="lg"
                class="h-5 w-5 mt-1"
                [ngClass]="{ 'transform rotate-90 transition-all ease-in-out duration-150': accordion.show }"
              ></ui-icon>
              <span>{{ accordion.btnText }}</span>
            </div>
          </button>
        </div>
        <div *ngIf="accordion.show" class="bg-white dark:bg-gray-800 dark:text-white border px-10 py-6">
          {{ accordion.description }}
        </div>
      </div>
    </div>
  `,
})
export class WebUiAccordionComponent {
  @Input() accordions?: Accordion[]
}

type Accordion = {
  id: string
  btnText: string
  description: string
  show: boolean
  icon?: string
}
