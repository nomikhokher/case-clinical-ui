import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-group-button',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
          <ng-container *ngFor="let button of buttons; first as firstElement; last as lastElementlast">
            <ng-container>
              <button
                type="button"
                class="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                [ngClass]="[
                  firstElement ? 'rounded-l-md' : '-ml-px relative',
                  lastElementlast ? '-ml-px relative rounded-r-md' : ''
                ]"
              >
                <ui-icon
                  *ngIf="(!button.direction || button.direction === 'left') && button.icon"
                  size="lg"
                  class="h-5 w-5 mr-1"
                  icon="{{ button.icon }}"
                ></ui-icon>
                {{ button.name }}

                <ui-icon
                  *ngIf="button.direction === 'right' && button.icon"
                  size="lg"
                  class=" h-5 w-5 ml-1"
                  icon="{{ button.icon }}"
                ></ui-icon>
              </button>
            </ng-container>
          </ng-container>
        </span>
      </div>
    </div>
  `,
})
export class WebUiGroupButtonComponent {
  @Input() buttons: Button[]
}

interface Button {
  id?: string
  name?: string
  icon?: string
  direction?: string
}
