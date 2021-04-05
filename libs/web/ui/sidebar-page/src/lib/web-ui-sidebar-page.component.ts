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
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <!-- Static sidebar for desktop -->
      <aside class="hidden md:flex md:flex-shrink-0 w-64 bg-gray-800">
        <div class="flex flex-col h-0 flex-1 bg-gray-800">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col h-0 flex-1 bg-gray-800">
            <div class="flex items-center flex-shrink-0 px-4"></div>
            <div class="mt-5 flex-1 flex flex-col">
              <nav class="flex-1 px-2 bg-gray-800 space-y-1">
                <ng-container *ngFor="let link of links">
                  <ng-container *ngIf="link.path">
                    <a
                      [routerLink]="link.path"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <svg
                        class="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      {{ link.label }}
                    </a>
                  </ng-container>

                  <ng-container *ngIf="!link.path">
                    <a
                      class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      {{ link.label }}
                    </a>
                  </ng-container>
                </ng-container>
              </nav>
            </div>
          </div>
        </div>
      </aside>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                class="flex justify-between items-center  px-6 py-3 mb-3 md:mb-6 bg-gray-800 text-gray-300 shadow rounded-md"
              >
                <div class="text-lg font-semibold">
                  {{ headerTitle }}
                </div>
              </div>
              <ng-content></ng-content>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class WebUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: WebUiSidebarPageLink | WebUiSidebarPageHeader[] = []
}
