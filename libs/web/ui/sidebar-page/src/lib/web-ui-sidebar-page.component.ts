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
    <div class="h-auto flex overflow-hidden bg-gray-100">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

        <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
          <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
           -->
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <ng-container *ngFor="let link of links">
                <ng-container *ngIf="link.path">
                  <a
                    [routerLink]="link.path"
                    class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg
                      class="text-indigo-300 group-hover:text-gray-300 mr-3 h-6 w-6"
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

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden bg-indigo-700 md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 ">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-grow pt-1 pb-4 overflow-y-auto h-screen fixed w-64">
            <div class="mt-5 flex-1 flex flex-col">
              <nav class="flex-1 px-2 space-y-1">
                <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
                <ng-container *ngFor="let link of links">
                  <ng-container *ngIf="link.path">
                    <a
                      [routerLink]="link.path"
                      class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <svg
                        class="text-indigo-300 group-hover:text-gray-300 mr-3 h-6 w-6"
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
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <section class="flex-1 focus:outline-none" tabindex="0">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div class="rounded-lg">
                  <router-outlet></router-outlet>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class WebUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: WebUiSidebarPageLink | WebUiSidebarPageHeader[] = []
}
