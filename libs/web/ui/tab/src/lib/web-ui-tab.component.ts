import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-tab',
  template: `
    <div *ngIf="style == 'underline' || style == 'pills'" class="dark:bg-white dark:text-gray-900 ">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option *ngFor="let i of tabs" (click)="onTabs(i)">{{ i.item }}</option>
        </select>
      </div>
      <div class="hidden sm:block px-3" [ngClass]="{ 'py-4': style == 'pills' }">
        <div [ngClass]="{ 'border-b border-gray-200': style == 'underline' }">
          <nav class="space-x-3" [ngClass]="{ '-mb-px flex space-x-8': style == 'underline' }" aria-label="Tabs">
            <a
              *ngFor="let i of tabs"
              (click)="onTabs(i)"
              id="t"
              class="cursor-pointer dark:hover:text-gray-500 dark:hover:border-gray-500 "
              [ngClass]="{
                'flex space-x-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm':
                  style == 'underline',
                'text-gray-500 hover:text-gray-700 hover:bg-gray-300 hover:rounded-md px-5 py-2 font-medium text-sm rounded-md dark:text-gray-900':
                  style == 'pills',
                'bg-gray-300 px-3 rounded-md': i.active == true
              }"
            >
              <ui-icon *ngIf="i.icon" size="lg" icon="{{ i.icon }}" class="h-5 w-5"></ui-icon>
              <span>{{ i.item }}</span>
              <span
                *ngIf="i.badge"
                class="bg-indigo-100 text-indigo-600 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                >{{ i.badge }}</span
              >
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div *ngIf="style == 'full-underline'" class="dark:bg-white dark:text-gray-900">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        >
          <option *ngFor="let i of tabs" (click)="onTabs(i)">{{ i.item }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex" aria-label="Tabs">
            <a
              *ngFor="let i of tabs"
              (click)="onTabs(i)"
              class=" cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-indigo-500 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
              [ngClass]="{ 'bg-gray-300 px-3 rounded-md': i.active == true }"
            >
              {{ i.item }}
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div *ngIf="style == 'bar-underline'" class="w-100">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-400 rounded-md"
        >
          <option *ngFor="let i of tabs" (click)="i.active = !i.active">{{ i.item }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          <a
            *ngFor="let i of tabs"
            [ngClass]="{
              'rounded-l-lg': j == 0,
              'rounded-r-lg': j == tabs.length - 1,
              'bg-gray-300 px-3 rounded-md': i.active == true
            }"
            (click)="onTabs(i)"
            class="cursor-pointer text-gray-900  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10"
            aria-current="page"
          >
            <span>{{ i.item }}</span>
          </a>
        </nav>
      </div>
    </div>
  `,
})
export class WebUiTabComponent {
  @Input() options?: Tabs
  @Input() active?: any
  @Input() styleType?: string
  @Output() tabSelected = new EventEmitter()
  @Input() tabs?: Array<any>
  @Input() style?: String

  show: false

  constructor() {
    console.log(this.options)
  }
  ngOnInit(): void {
    this.tabs.forEach((x) => {
      x.active = false
    })
  }
  clickHandler(tab: Tabs) {
    this.active = 9999
    if (this.tabSelected) {
      this.tabSelected.emit([tab, this.options])
    }
  }
  onTabs(i) {
    this.tabs.forEach((x) => {
      x.active = false
    })
    i.active = true
  }
}

export interface Tabs {
  name: string
  active?: boolean
  content?: any
  icon?: string
  notification?: number
}
