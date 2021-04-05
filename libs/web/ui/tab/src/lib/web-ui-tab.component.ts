import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-tab',
  template: `
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        on-click="clickHandler($event.target.value)"
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <ng-container *ngFor="let ele of options; let i = index">
          <option>
            {{ ele.name }}
          </option>
        </ng-container>
      </select>
    </div>
    <div class="hidden sm:block">
      <ng-container *ngIf="styleType == '1'">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <ng-container *ngFor="let ele of options; let i = index">
              <a
                class="{{
                  ele.active || active == i + 1
                    ? 'border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                }}"
                on-click="clickHandler(ele)"
              >
                {{ ele.name }}
              </a>
            </ng-container>
          </nav>
        </div>
      </ng-container>

      <ng-container *ngIf="styleType == '2'">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <ng-container *ngFor="let ele of options; let i = index">
              <a
                class="{{
                  ele.active || active == i + 1
                    ? 'border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                }}"
                on-click="clickHandler(ele)"
              >
                <svg
                  class="text-indigo-500 -ml-0.5 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                  />
                </svg>
                <span>{{ ele.name }}</span>
              </a>
            </ng-container>
          </nav>
        </div>
      </ng-container>

      <ng-container *ngIf="styleType == '3'">
        <nav class="flex space-x-4" aria-label="Tabs">
          <ng-container *ngFor="let ele of options; let i = index">
            <a
              class="{{
                ele.active || active == i + 1
                  ? 'text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md'
                  : 'bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md'
              }}"
              on-click="clickHandler(ele)"
            >
              {{ ele.name }}
            </a>
          </ng-container>
        </nav>
      </ng-container>

      <ng-container *ngIf="styleType == '4'">
        <nav class="flex space-x-4" aria-label="Tabs">
          <ng-container *ngFor="let ele of options; let i = index">
            <a
              class="{{
                ele.active || active == i + 1
                  ? 'bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md'
                  : 'text-gray-600 hover:text-gray-800 px-3 py-2 font-medium text-sm rounded-md'
              }}"
              on-click="clickHandler(ele)"
            >
              {{ ele.name }}
            </a>
          </ng-container>
        </nav>
      </ng-container>

      <ng-container *ngIf="styleType == '5'">
        <nav class="flex space-x-4" aria-label="Tabs">
          <ng-container *ngFor="let ele of options; let i = index">
            <a
              class="{{
                ele.active || active == i + 1
                  ? 'bg-indigo-100 text-indigo-700 px-3 py-2 font-medium text-sm rounded-md'
                  : 'text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md'
              }}"
              on-click="clickHandler(ele)"
            >
              {{ ele.name }}
            </a>
          </ng-container>
        </nav>
      </ng-container>

      <ng-container *ngIf="styleType == '6'">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex" aria-label="Tabs">
            <ng-container *ngFor="let ele of options; let i = index">
              <a
                class="{{
                  ele.active || active == i + 1
                    ? 'border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                }}"
                on-click="clickHandler(ele)"
              >
                {{ ele.name }}
              </a>
            </ng-container>
          </nav>
        </div>
      </ng-container>

      <ng-container *ngIf="styleType == '7'">
        <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          <ng-container *ngFor="let ele of options; let i = index">
            <a
              class="{{
                ele.active || active == i + 1
                  ? 'text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                  : 'text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              }}"
              on-click="clickHandler(ele)"
            >
              <span>{{ ele.name }}</span>
              <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
            </a>
          </ng-container>
        </nav>
      </ng-container>

      <ng-container *ngIf="styleType == '8'">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <ng-container *ngFor="let ele of options; let i = index">
              <a
                class="{{
                  ele.active || active == i + 1
                    ? 'border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                }}"
                on-click="clickHandler(ele)"
              >
                <span>{{ ele.name }}</span>
                <span
                  *ngIf="ele.notification"
                  class="bg-indigo-100 text-indigo-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                >
                  {{ ele.notification }}
                </span>
              </a>
            </ng-container>
          </nav>
        </div>
      </ng-container>
    </div>

    <ng-container *ngFor="let ele of options; let i = index">
      <ng-container *ngIf="ele.active == true || active == i + 1">
        <div [innerHtml]="ele.content"></div>
      </ng-container>
    </ng-container>
  `,
})
export class WebUiTabComponent {
  @Input() options?: Tabs
  @Input() active?: any
  @Input() styleType?: string
  @Output() tabSelected = new EventEmitter()

  constructor() {
    console.log(this.options)
  }

  clickHandler(tab: Tabs) {
    this.active = 9999
    if (this.tabSelected) {
      this.tabSelected.emit([tab, this.options])
    }
  }
}

export interface Tabs {
  name: string
  active?: boolean
  content?: any
  icon?: string
  notification?: number
}
