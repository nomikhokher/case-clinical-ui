import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'dense-header-layout',
  styles: [
    `
      .aside-scrollbar::-webkit-scrollbar {
        width: 8px;
      }

      .aside-scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      .aside-scrollbar::-webkit-scrollbar-thumb {
        background: var(--theme-color-400) !important;
        border-radius: 12px;
      }

      .aside-scrollbar::-webkit-scrollbar-thumb:hover {
        background: var(--theme-color-300) !important;
      }
    `,
  ],
  template: `
    <div id="header">
      <aside
        class="hidden aside-scrollbar w-{{
          asideWidth
        }} transition-all ease-in-out duration-900 hover:w-72 hover:z-10 text-gray-900 leading-6 theme-bg-600 dark:theme-bg-900 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-3 flex justify-between">
          <a href="/components" class="m-3">
            <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-10" alt="App Logo" />
          </a>
        </div>
        <div class="p-3 h-auto">
          <!-- Extract: menu_items -->
          <ng-container *ngFor="let link of profileLinks">
            <ng-container *ngFor="let child of link.childs">
              <span (mouseleave)="child.dropDown = false">
                <a
                  [routerLink]="child.route"
                  class="text-indigo-100 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  (click)="child.dropDown = !child.dropDown"
                >
                  <div
                    class="mr-7 p-2"
                    routerLinkActive="theme-color-100 bg-opacity-50"
                    [routerLinkActiveOptions]="{ exact: true }"
                  >
                    <ui-icon
                      [icon]="link.icon"
                      size="lg"
                      class="text-indigo-300 group-hover:text-gray-300 h-8 w-8 pt-1 pl-1"
                    ></ui-icon>
                  </div>
                  {{ child.label }}
                  <div class="flex justify-end w-full" *ngIf="child.children">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                        *ngIf="!child.dropDown"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                        *ngIf="child.dropDown"
                      />
                    </svg>
                  </div>
                </a>

                <div *ngIf="child.dropDown" class="theme-bg-500 rounded-md my-1">
                  <ng-container *ngFor="let children of child.children">
                    <a
                      (click)="children.dropDown = !children.dropDown"
                      [routerLink]="children.route"
                      class="text-indigo-100 hover:theme-bg-400 pl-20 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                    >
                      &nbsp;{{ children.label }}
                      <div class="flex justify-end w-full" *ngIf="children.children">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                            *ngIf="!children.dropDown"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                            *ngIf="children.dropDown"
                          />
                        </svg>
                      </div>
                    </a>
                    <div *ngIf="children.dropDown" class="theme-bg-300 rounded-md">
                      <a
                        *ngFor="let subChildren of children.children"
                        [routerLink]="subChildren.route"
                        class="text-indigo-100 hover:theme-bg-400 pl-20 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                      >
                        &nbsp;{{ subChildren.label }}
                      </a>
                    </div>
                  </ng-container>
                </div>
              </span>
            </ng-container>
          </ng-container>
        </div>
      </aside>
      <section
        class="sm:pl-{{
          asideWidth
        }} transition-all ease-in-out duration-500 bg-white dark:bg-gray-600 dark:text-gray-300"
      >
        <header class="flex-none w-full relative text-sm leading-6 font-medium py-5 theme-bg-100 dark:theme-bg-50">
          <div class="px-4">
            <div class="flex justify-between">
              <div class="flex">
                <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    (click)="sideBarWith()"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>

                <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    (click)="asideBarWith()"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
              </div>
              <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6">
                <div class="relative sm:border-l -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6 border-gray-200">
                  <button
                    type="button"
                    class="font-medium flex items-center"
                    aria-expanded="true"
                    (click)="showMenu = !showMenu"
                    (clickOutside)="showMenu = false"
                  >
                    <span class="hidden sm:flex items-center">
                      <img
                        *ngIf="user?.avatarUrl"
                        class="h-8 w-8 rounded-full"
                        [src]="user?.avatarUrl"
                        alt="not found"
                      />
                      <svg width="8" height="6" fill="none" class="ml-2.5 text-gray-400">
                        <path
                          d="M7 1.5l-3 3-3-3"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span class="flex sm:hidden -my-1 w-8 h-8 rounded-lg items-center justify-center">
                      <svg width="20" height="20" fill="none" class="text-gray-900">
                        <path
                          d="M3.75 4.75h12.5M3.75 9.75h12.5M3.75 14.75h12.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    *ngIf="showMenu"
                    class="absolute top-full right-0 w-52 mt-3 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5 font-normal text-sm text-gray-900 divide-y divide-gray-100"
                  >
                    <p class="py-3 px-3.5 truncate">
                      <span class="block mb-0.5 text-xs text-gray-500">Signed in as</span>
                      <span class="font-semibold">{{ user?.email }}</span>
                    </p>
                    <div class="py-1.5 px-3.5">
                      <!-- menu or icons -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <hr />
        <main class="flex-1 h-full overflow-auto dark:bg-gray-900">
          <router-outlet></router-outlet>
        </main>
      </section>
    </div>
  `,
})
export class DenseHeaderComponent {
  public showMenu = false
  public asideWidth: number = 24

  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  asideBarWith() {
    if (this.asideWidth == 24) {
      this.asideWidth = 72
    } else {
      this.asideWidth = 24
    }
  }

  sideBarWith() {
    if (this.asideWidth == 24) {
      this.asideWidth = 0
    } else {
      this.asideWidth = 24
    }
  }
}
