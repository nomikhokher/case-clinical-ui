import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
import { WebLayoutLink } from '@schema-driven/web/layout'
import { ServiceCodepreview } from '../../../codepreview.service'

@Component({
  selector: 'ui-sidebar-classy',
  styleUrls: ['./web-ui-sidebar-classy.scss'],
  template: `
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true" *ngIf="mobileSideBar">
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
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 theme-bg-600 dark:theme-bg-900">
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
              (click)="mobileSideBar = false"
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

          <div class="flex-shrink-0 justify-between flex items-center px-4">
            <div>
              <img
                class="h-6 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div>
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
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <ng-container *ngFor="let link of profileLinks">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                    </ng-container>

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
          </div>
          <div class="px-6 pb-6 pt-3 flex flex-col items-center border-b border-gray-500 sm:flex-col">
            <div class="mr-auto w-full flex-shrink-0 flex justify-center items-center rounded-full sm:mt-4 sm:mx-auto">
              <img
                src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                height="50%"
                width="50%"
                class="rounded-full"
              />
            </div>
            <div class="ml-4 flex-1 flex flex-col text-center sm:mt-4 sm:ml-0 sm:items-center">
              <div class="text-white text-2xl sm:text-sm ">William</div>
              <div class="text-white text-2xl sm:text-sm">william@gmail.com</div>
            </div>
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto aside-scrollbar">
            <nav class="px-2 space-y-1">
              <div>
                <ng-container *ngFor="let link of links">
                  <ng-container *ngIf="!link.children">
                    <a
                      [routerLink]="link.route"
                      routerLinkActive="theme-bg-500"
                      class="theme-color-100 h-14 relative hover:theme-bg-400 hover:text-white group flex items-center my-2 px-2 py-2 text-sm font-medium rounded-md"
                      (click)="link.dropDown = !link.dropDown"
                    >
                      <ui-icon
                        [icon]="link.icon"
                        size="lg"
                        class="theme-color-300 group-hover:text-gray-300 h-8 w-7 mr-3 pt-1"
                      ></ui-icon>
                      {{ link.label }}
                    </a>
                  </ng-container>
                  <div *ngIf="link.children" class="relative group">
                    <div class="p-3 my-3 rounded-md">
                      <p class="uppercase text-gray-100 text-sm font-semibold">{{ link.title }}</p>
                      <p class="capitalize text-gray-200 text-xs">{{ link.subTitle }}</p>
                    </div>
                    <ng-container *ngFor="let child of link.children">
                      <a
                        [routerLink]="child.route"
                        routerLinkActive="theme-bg-500"
                        class="theme-color-100 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        (click)="child.dropDown = !child.dropDown"
                      >
                        <ui-icon
                          [icon]="child.icon"
                          size="lg"
                          class="theme-color-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
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
                            class="theme-color-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
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
                              class="theme-color-100 hover:theme-bg-400 pl-14 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
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
            </nav>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden theme-bg-600 dark:theme-bg-900 md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto aside-scrollbar">
            <div class="flex justify-between items-center flex-shrink-0 px-4">
              <div>
                <img
                  class="h-6 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div>
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
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <ng-container *ngFor="let link of profileLinks">
                        <a
                          [routerLink]="link.route"
                          class="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          {{ link.label }}
                        </a>
                      </ng-container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6 pt-3 flex flex-col items-center border-b theme-border-500 sm:flex-col">
              <div
                class="mr-auto w-full flex-shrink-0 flex justify-center items-center rounded-full sm:mt-4 sm:mx-auto"
              >
                <img
                  src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                  height="50%"
                  width="50%"
                  class="rounded-full"
                />
              </div>
              <div class="ml-4 flex-1 flex flex-col text-center sm:mt-4 sm:ml-0 sm:items-center">
                <div class="text-white text-2xl sm:text-sm ">William</div>
                <div class="text-white text-2xl sm:text-sm">william@gmail.com</div>
              </div>
            </div>
            <div class="mt-5 flex-1 flex flex-col">
              <nav class="flex-1 px-2 space-y-1">
                <div class="mt-4">
                  <ng-container *ngFor="let link of links">
                    <ng-container *ngIf="!link.children">
                      <a
                        [routerLink]="link.route"
                        routerLinkActive="theme-bg-500"
                        class="theme-color-100 relative my-2 h-14 hover:theme-bg-500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      >
                        <ui-icon
                          [icon]="link.icon"
                          class="theme-color-300 group-hover:text-gray-300 h-8 w-7 mr-3"
                        ></ui-icon>
                        {{ link.label }}
                      </a>
                    </ng-container>
                    <ng-container *ngIf="link.children">
                      <div class="relative group">
                        <div class="p-3 my-3 rounded-md">
                          <p class="uppercase text-gray-100 text-sm font-semibold">{{ link.title }}</p>
                          <p class="capitalize text-gray-200 text-xs">{{ link.subTitle }}</p>
                        </div>
                        <ng-container *ngFor="let child of link.children">
                          <a
                            [routerLink]="child.route"
                            class="theme-color-100 relative hover:theme-bg-500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            (click)="child.dropDown = !child.dropDown"
                          >
                            <ui-icon
                              *ngIf="child.icon"
                              [icon]="child.icon"
                              class="theme-color-300 group-hover:text-gray-300 h-6 w-6 mr-3"
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
                                class="theme-color-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
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
                                  class="theme-color-100 hover:theme-bg-400 pl-14 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                                >
                                  &nbsp;{{ subChildren.label }}
                                </a>
                              </div>
                            </ng-container>
                          </div>
                        </ng-container>
                      </div>
                    </ng-container>
                  </ng-container>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
          <button
            type="button"
            class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            (click)="mobileSideBar = true"
          >
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu-alt-2 -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <div class="flex-1 px-4 py-2 flex justify-between">
            <div class="flex-1 flex" (clickOutside)="showAllComponents()">
              <form class="w-full flex md:ml-0">
                <label for="search_field" class="sr-only">Search</label>
                <div class="relative w-full text-gray-400 focus-within:theme-color-500">
                  <div class="absolute inset-y-0 left-2 flex items-center cursor-pointer" (click)="hideShowSearchBar()">
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    (input)="onSearch($event)"
                    *ngIf="showSearchBar == true"
                    id="search_field"
                    class="block w-full dark:bg-gray-800 focus:outline-none border-1 border-gray-300 rounded-full bg-white dark:text-gray-100 h-full pl-8 pr-3 py-2 text-gray-900 placeholder-gray-500  focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    #searchBarInput
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <main class="flex-1 relative overflow-y-auto focus:outline-none bg-white dark:bg-gray-900 dark:text-gray-300">
          <router-outlet *ngIf="true"></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class WebUiSidebarClassyComponent {
  public showMenu = false
  public asideWidth: number = 72
  public mobileSideBar: boolean = false
  public showSearchBar: boolean = false
  public asideMobileWidth: number = 0

  @ViewChild('searchBarInput', { static: false }) searchBarInput: ElementRef | undefined
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: WebLayoutLink[] = []
  @Input() profileLinks: WebLayoutLink[] = []
  @Input() logo: string
  constructor(public searchService: ServiceCodepreview, private readonly cdRef: ChangeDetectorRef) {}

  @HostListener('document:keydown.control.k', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault()
    this.showSearchBar = !this.showSearchBar
    this.cdRef.detectChanges()
    this.searchBarInput?.nativeElement.focus()
  }

  hideShowSearchBar() {
    this.showSearchBar = !this.showSearchBar
  }
  onSearch(e: any) {
    this.searchService.searchBar$.next(e.target.value)
  }
  ngOnDestroy(): void {
    this.searchService.searchBar$.next([])
  }
  showAllComponents() {
    this.showSearchBar = false
    this.searchService.searchBar$.next([])
  }
}
