import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
@Component({
  selector: 'ui-stacked-enterprise',
  template: `
    <div>
      <nav class="bg-indigo-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                  alt="Workflow"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
                  <ng-container *ngFor="let link of profileLinks">
                    <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6" (clickOutside)="link.dropDown = false">
                      <button
                        type="button"
                        class="font-medium flex items-center"
                        aria-expanded="true"
                        (click)="link.dropDown = !link.dropDown"
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
                        class="origin-top-right absolute right-0 mt-2 w-48 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                              class="absolute top-0 left-48 w-52 -mr-0.5 sm:-mr-3.5 bg-white  shadow-md font-normal text-sm text-gray-900"
                            >
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
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  class="p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
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
                      class="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
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
                      >Your Profile</a
                    >

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      >Your Profile</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  *ngIf="!mobileSideBar"
                  (click)="mobileSideBar = true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  *ngIf="mobileSideBar"
                  (click)="mobileSideBar = false"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu" *ngIf="mobileSideBar">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
            <div class="mt-4">
              <ng-container *ngFor="let link of profileLinks">
                <div class="relative group">
                  <div class="p-3 my-3 font-bold theme-bg-500 rounded-md">
                    <p class="uppercase text-gray-100 text-sm">{{ link.title }}</p>
                    <p class="capitalize text-gray-200 text-xs">{{ link.subTitle }}</p>
                  </div>
                  <ng-container *ngFor="let child of link.childs">
                    <a
                      [routerLink]="child.route"
                      class="text-indigo-100 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      (click)="child.dropDown = !child.dropDown"
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
                    </a>

                    <div *ngIf="child.dropDown" class="theme-bg-500 rounded-md my-1">
                      <ng-container *ngFor="let children of child.children">
                        <a
                          (click)="children.dropDown = !children.dropDown"
                          [routerLink]="children.route"
                          class="text-indigo-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
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
                        </a>
                        <div *ngIf="children.dropDown" class="theme-bg-300 rounded-md">
                          <a
                            *ngFor="let subChildren of children.children"
                            [routerLink]="subChildren.route"
                            class="text-indigo-100 hover:theme-bg-400 pl-14 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                          >
                            &nbsp;{{ subChildren.label }}
                          </a>
                        </div>
                      </ng-container>
                    </div>
                  </ng-container>
                </div>
              </ng-container>
            </div>
          </div>
          <div class="pt-4 pb-3 border-t border-indigo-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">Tom Cook</div>
                <div class="text-sm font-medium text-indigo-300">tom@example.com</div>
              </div>
              <button
                class="ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
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
            </div>
            <div class="mt-3 px-2 space-y-1">
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Your Profile</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Settings</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 class="text-lg leading-6 font-semibold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main class="bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-4 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-auto">
              <router-outlet></router-outlet>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  `,
})
export class WebUiStackedEnterpriseComponent {
  public showMenu = false
  public mobileSideBar: boolean = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
}
