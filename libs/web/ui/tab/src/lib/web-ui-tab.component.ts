import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-tab',
  template: `
    <div>
      <!-- <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select id="tabs" name="tabs"
          class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>My Account</option>

          <option>Company</option>

          <option selected>Team Members</option>

          <option>Billing</option>
      </select>
  </div> -->
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <ng-container *ngFor="let demo of demos">
              <a
                class="{{
                  demo.isactive
                    ? 'border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                }}"
                on-click="demo.tabHandler(demo)"
              >
                {{ demo.name }}
              </a>
            </ng-container>
          </nav>
        </div>
      </div>

      <ng-continer *ngFor="let ele of demos">
        <ng-conainer *ngIf="ele.isactive == true">
          <ng-conainer [innerHtml]="ele.content"></ng-conainer>
        </ng-conainer>
      </ng-continer>
    </div>
  `,
})
export class WebUiTabComponent {
  @Input() demos?: Tabs

  constructor() {}
}

export interface Tabs {
  class?: string
  name: string
  active: string
  isactive: boolean
  tabHandler?: (Tabs) => void
  content?: any
}
