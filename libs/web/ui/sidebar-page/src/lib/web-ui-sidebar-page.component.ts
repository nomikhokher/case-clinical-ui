import { Component, Input } from '@angular/core'

export interface WebUiSidebarPageLink {
  label: string
  icon: string
  path: string
}
export interface WebUiSidebarPageHeader {
  label: string
}

@Component({
  selector: 'ui-sidebar-page',
  template: `
    <ui-page [headerTitle]="headerTitle">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 h-screen">
        <aside class="py-3 md:py-6 md:px-2 lg:py-0 lg:px-0 lg:col-span-3 h-screen flex">
        <div class="flex-1 flex overflow-hidden">
        <!-- Scrollable container -->
        <div class="flex-1 overflow-y-scroll">
          <nav class="space-y-1 md:space-y-3">
            <ng-container *ngFor="let link of links">
              <ng-container *ngIf="!link.path">
                <div
                  class="uppercase dark:border-gray-800 dark:text-gray-500 text-gray-900 rounded-md px-5 pb-0 py-2 flex items-center text-sm tracking-wider"
                >
                {{ link.label }}
                </div>
              </ng-container>
              <ng-container *ngIf="link.path">
                <a
                  routerLinkActive="bg-gray-50 dark:bg-gray-700 text-pink-600 dark:text-pink-600 hover:bg-white"
                  [routerLink]="link.path"
                  class="dark:bg-gray-800 dark:text-gray-400 text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                >
                  <i class="mr-2 text-gray-900 fa fa-fw {{ link.icon || 'fa-cube ' }}"></i>
                  <span class="truncate">
                    {{ link.label }}
                  </span>
                </a>
              </ng-container>
            </ng-container>
          </nav>
          </div>
          </div>
        </aside>

        
        <div class="md:px-2 lg:px-0 lg:col-span-9 overflow-y-scroll">
          <ng-content></ng-content>
        </div>
      </div>
    </ui-page>
  `,
})
export class WebUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: WebUiSidebarPageLink | WebUiSidebarPageHeader[] = []
}
