import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-tab',
  template: `
    <div *ngIf="style == 'underline' || style == 'pills'" class="dark:bg-gray-800 dark:text-gray-900 ">
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
          <nav
            class="space-x-3 flex"
            [ngClass]="{
              '-mb-px flex space-x-8': style == 'underline',
              'justify-start': alignment == 'right',
              'justify-center': alignment == 'center',
              'justify-end': alignment == 'left',
              'justify-between': alignment == 'full'
            }"
            aria-label="Tabs"
          >
            <a
              *ngFor="let i of tabs"
              (click)="onTabs(i)"
              id="t"
              [routerLink]="['/dev/tabs']"
              class="cursor-pointer dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
              [ngClass]="{
                'flex space-x-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm':
                  style == 'underline',
                'text-gray-500  hover:bg-gray-300 hover:rounded-md px-5 py-2 font-medium text-sm rounded-md':
                  style == 'pills',
                'bg-gray-300 dark:text-gray-700 dark:hover:text-gray-900 px-3 rounded-md': i.active == true
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
  `,
})
export class WebUiTabComponent {
  @Input() options?: Tabs
  @Input() active?: any
  @Input() styleType?: string
  @Output() tabSelected = new EventEmitter()
  @Input() tabs?: Array<any>
  @Input() style?: String
  @Input() alignment?: string

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
    alert(i.item + ' tab selected!')
  }
}

export interface Tabs {
  name: string
  active?: boolean
  content?: any
  icon?: string
  notification?: number
}
