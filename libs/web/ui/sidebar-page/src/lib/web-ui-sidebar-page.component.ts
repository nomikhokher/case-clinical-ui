import { Component, Input } from '@angular/core'

export interface WebUiSidebarPageLink {
  label: string
  children: [
    {
      label: string
      icon: string
      path: string
      show?: boolean
    },
  ]
}
// export interface WebUiSidebarPageHeader {
//   label: string
// }

@Component({
  selector: 'ui-sidebar-page',
  styles: [
    `
      #sideApp::-webkit-scrollbar {
        width: 12px;
      }

      #sideApp::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-border-radius: 10px;
        border-radius: 10px;
      }

      #sideApp::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #a8a8a8;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      }

      #sideApp::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255, 0, 0, 0.4);
      }
    `,
  ],
  template: `
    <div id="main">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
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
            <nav class="flex-1 px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <ng-container *ngFor="let link of links">
                <div
                  class="text-gray-700 mt-4 flex justify-between rounded-md w-56 px-2 py-2 cursor-pointer hover:bg-indigo-600"
                  (click)="menuOpen(link)"
                >
                  <a class="text-indigo-100 group flex items-center px-2 py-2 text-sm font-medium">
                    {{ link.label }}
                  </a>
                  <div class="rounded-full border border-indigo w-7 m-1 h-7 flex items-center justify-center bg-indigo">
                    <!-- icon by feathericons.com -->
                    <svg
                      aria-hidden="true"
                      data-reactid="281"
                      fill="none"
                      height="24"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewbox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="18 15 12 9 6 15" *ngIf="!link.show"></polyline>
                      <polyline points="6 9 12 15 18 9" *ngIf="link.show"></polyline>
                    </svg>
                  </div>
                </div>

                <ng-container *ngIf="link.show">
                  <ng-container *ngFor="let children of link.children">
                    <a
                      [routerLink]="children.path"
                      class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center w-56  px-2 py-2 text-sm font-medium rounded-md"
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

                      {{ children.label }}
                    </a>
                  </ng-container>
                </ng-container>
              </ng-container>
            </nav>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
      <aside
        id="sideApp"
        class="hidden w-64 text-white hidden bg-indigo-700 md:flex md:flex-shrink-0 fixed inset-y-0 top-16 overflow-x-hidden overflow-y-auto"
      >
        <div class="min-h-full">
          <!-- Extract: menu_items -->
          <div class="flex-1 flex flex-col">
            <nav class="flex-1 px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <ng-container *ngFor="let link of links">
                <div
                  class="text-gray-700 mt-4 flex justify-between rounded-md w-56 px-2 py-2 cursor-pointer hover:bg-indigo-600"
                  (click)="menuOpen(link)"
                >
                  <a class="text-indigo-100 group flex items-center px-2 py-2 text-sm font-medium">
                    {{ link.label }}
                  </a>
                  <div class="rounded-full border border-indigo w-7 m-1 h-7 flex items-center justify-center bg-indigo">
                    <!-- icon by feathericons.com -->
                    <svg
                      aria-hidden="true"
                      data-reactid="281"
                      fill="none"
                      height="24"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewbox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="18 15 12 9 6 15" *ngIf="!link.show"></polyline>
                      <polyline points="6 9 12 15 18 9" *ngIf="link.show"></polyline>
                    </svg>
                  </div>
                </div>

                <ng-container *ngIf="link.show">
                  <ng-container *ngFor="let children of link.children">
                    <a
                      [routerLink]="children.path"
                      class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center w-56  px-2 py-2 text-sm font-medium rounded-md"
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

                      {{ children.label }}
                    </a>
                  </ng-container>
                </ng-container>
              </ng-container>
            </nav>
          </div>
        </div>
      </aside>
      <section class="pt-4 sm:pl-64 bg-white h-auto main-section">
        <section class="flex-1 focus:outline-none" tabindex="0">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="rounded-lg">
                <ng-content></ng-content>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </section>
      </section>
    </div>
  `,
})
export class WebUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: WebUiSidebarPageLink[] = []

  public menuList: boolean = false

  menuOpen(link): void {
    link.show = link.show ? false : true
  }
  ngOnInit() {
    this.links = this.links.map((value) => {
      if (value.children) {
        for (let i = 0; i < value.children.length; i++) {
          value.children[i].show = true
        }
      }
      return value
    })
  }
}
