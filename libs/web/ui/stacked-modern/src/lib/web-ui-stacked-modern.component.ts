import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
@Component({
  selector: 'ui-stacked-modern',
  template: `
    <div class="flex flex-col flex-auto items-center w-full min-w-0 bg-gray-200 dark:bg-gray-900">
      <div class="relative w-full h-16 sm:h-20 md:h-36 dark:shadow-none print:hidden">
        <header
          class="flex-none relative text-sm leading-6 font-medium bg-white dark:bg-gray-700 dark:text-gray-300 py-5"
        >
          <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-28 flex items-center ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                  alt="Workflow"
                />
              </div>
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
                    class="absolute top-full right-0 w-52 mt-3 -mr-0.5 sm:-mr-3.5 bg-white shadow-md font-normal text-sm text-gray-900"
                  >
                    <ng-container *ngFor="let child of link.childs">
                      <a
                        [routerLink]="child.route"
                        class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium"
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
                          class="absolute top-0 left-52 w-52 -mr-0.5 sm:-mr-3.5 bg-white shadow-md font-normal text-sm text-gray-900"
                        >
                          <div class="absolute left-20 mx-auto pt-2"></div>
                          <div class="absolute left-28"></div>
                          <ng-container *ngFor="let children of child.children">
                            <a
                              [routerLink]="children.route"
                              class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium"
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
                                class="absolute top-0 left-52 w-52 -mr-0.5 sm:-mr-3.5 bg-white shadow-md font-normal text-sm text-gray-900"
                              >
                                <a
                                  *ngFor="let subChildren of children.children"
                                  [routerLink]="subChildren.route"
                                  class="text-gray-600 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium"
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
            <div class="ml-4 flex items-center md:ml-6">
              <button
                class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg
                  class="h-6 w-6"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    (click)="showMenu = !showMenu"
                    (clickOutside)="showMenu = false"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                <div
                  *ngIf="showMenu"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Your Profile</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    >Settings</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Sign out</a
                  >
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
    </div>
  `,
})
export class WebUiStackedModernComponent {
  public showMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
}
