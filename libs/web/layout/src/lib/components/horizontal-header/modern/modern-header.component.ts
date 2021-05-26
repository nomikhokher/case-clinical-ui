import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'modern-header-layout',
  template: ` <div class="flex flex-col flex-auto items-center w-full min-w-0 bg-gray-200 dark:bg-gray-900">
    <div class="relative w-full h-16 sm:h-20 md:h-36 dark:shadow-none print:hidden">
      <header
        class="flex-none relative text-sm leading-6 font-medium bg-white dark:bg-gray-700 dark:text-gray-300 py-5"
      >
        <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-28 flex items-center ">
          <div class="flex items-center">
            <a href="/components" class="flex-none text-gray-900">
              <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="w-24" alt="App Logo" />
            </a>
          </div>
          <div class="mr-auto flex items-center">
            <ng-container *ngFor="let link of profileLinks">
              <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6 z-50">
                <button
                  type="button"
                  class="font-medium flex items-center"
                  aria-expanded="true"
                  (click)="link.dropDown = !link.dropDown"
                  (clickOutside)="link.dropDown = false"
                >
                  <span class="hidden sm:flex items-center">
                    <a
                      class="hidden sm:block text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white mx-4"
                      [routerLink]="link.route"
                    >
                      {{ link.title }}
                    </a>
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
                  *ngIf="link.dropDown"
                  class="absolute top-full right-0 w-52 mt-3 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md font-normal text-sm text-gray-900"
                >
                  <ng-container *ngFor="let child of link.childs">
                    <a
                      [routerLink]="child.route"
                      class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      (mouseover)="child.dropDown = true"
                      (mouseleave)="child.dropDown = false"
                    >
                      <ui-icon
                        [icon]="child.icon"
                        size="lg"
                        class="text-indigo-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
                      ></ui-icon>
                      {{ child.label }}
                      <span class="absolute right-2" *ngIf="child.children">
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
                      </span>

                      <div
                        *ngIf="child.dropDown"
                        class="absolute top-0 left-52 w-52 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md font-normal text-sm text-gray-900"
                      >
                        <ng-container *ngFor="let children of child.children">
                          <a
                            [routerLink]="children.route"
                            class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            (mouseover)="children.dropDown = true"
                            (mouseleave)="children.dropDown = false"
                          >
                            &nbsp;{{ children.label }}
                            <span class="absolute right-2" *ngIf="children.children">
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
                            </span>
                            <div
                              *ngIf="children.dropDown"
                              class="absolute top-0 left-52 w-52 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md font-normal text-sm text-gray-900"
                            >
                              <a
                                *ngFor="let subChildren of children.children"
                                [routerLink]="subChildren.route"
                                class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                              >
                                &nbsp;{{ subChildren.label }}
                              </a>
                            </div>
                          </a>
                        </ng-container>
                      </div>
                    </a>
                  </ng-container>
                </div>
              </div>
            </ng-container>
          </div>
          <div class="relative sm:border-l -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6 border-gray-200">
            <button
              type="button"
              class="font-medium flex items-center"
              aria-expanded="true"
              (click)="showMenu = !showMenu"
              (clickOutside)="showMenu = false"
            >
              <span class="hidden sm:flex items-center">
                <img *ngIf="user?.avatarUrl" class="h-8 w-8 rounded-full" [src]="user?.avatarUrl" alt="not found" />
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
              class="absolute top-full right-0 w-60 mt-3 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5 font-normal text-sm text-gray-900 divide-y divide-gray-100"
            >
              <p class="py-3 px-3.5 truncate">
                <span class="block mb-0.5 text-xs text-gray-500">Signed in as</span>
                <span class="font-semibold">{{ user?.email }}</span>
              </p>
              <div class="py-1.5 px-3.5">
                <p>Demo</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </div>
    <div class="flex flex-auto justify-center w-full sm:p-6 md:p-8">
      <main class="flex-1 h-full overflow-auto bg-white dark:bg-gray-700 rounded">
        <router-outlet></router-outlet>
      </main>
    </div>
  </div>`,
})
export class ModernHeaderComponent {
  public showMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
}
