import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-accordion',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div class="w-full my-4">
        <div class="rounded-sm" *ngFor="let accordion of accordions">
          <div class="border border-b-0 bg-gray-100 px-10 py-6">
            <button
              (click)="accordion.show = !accordion.show"
              class="text-gray-900 hover:text-gray-700 focus:outline-none"
              type="button"
            >
              <div class="flex">
                <ui-icon *ngIf="accordion.icon" [icon]="accordion.icon" size="lg" class="h-5 w-5 mt-1"></ui-icon>
                <span>{{ accordion.btnText }}</span>
              </div>
            </button>
          </div>
          <div *ngIf="accordion.show" class="bg-white border border-b-0 px-10 py-6">
            {{ accordion.description }}
          </div>
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
