import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
import { ServiceCodepreview } from '../../../codepreview.service'

@Component({
  selector: 'ui-sidebar-dense',
  styleUrls: ['./web-ui-sidebar-dense.scss'],
  template: `
    <div>
      <aside
        class="hidden aside-scrollbar {{
          asideWidth
        }} transition-all ease-in-out duration-900 hover:w-64 z-50 text-gray-900 leading-6 theme-bg-600 dark:theme-bg-900 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-3 flex items-center">
          <div class="flex-shrink-0 flex items-center px-3 pt-2">
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <hr />
        <div class="p-3 h-auto">
          <!-- Extract: menu_items -->
          <ng-container *ngFor="let link of links">
            <span (mouseleave)="link.dropDown = false">
              <a
                [routerLink]="link.route"
                routerLinkActive="theme-bg-500"
                class="text-indigo-100 my-5 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                (click)="link.dropDown = !link.dropDown"
              >
                <div class="mr-7 p-2" [routerLinkActiveOptions]="{ exact: true }">
                  <ui-icon
                    [icon]="link.icon"
                    size="lg"
                    class="text-indigo-300 group-hover:text-gray-300 h-8 w-8"
                  ></ui-icon>
                </div>
                {{ link.label }}
                <div class="flex justify-end w-full" *ngIf="link?.child?.children">
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
                      *ngIf="link?.child?.dropDown"
                    />
                  </svg>
                </div>
              </a>

              <div *ngIf="link?.child?.dropDown" class="theme-bg-500 rounded-md my-1">
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
        </div>
      </aside>

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

          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto aside-scrollbar">
            <nav class="px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <ng-container *ngFor="let link of links">
                <div class="relative group">
                  <div class="m-3 font-bold rounded-md">
                    <a
                      [routerLink]="link.route"
                      routerLinkActive="theme-bg-400 w-full block rounded-md"
                      class="uppercase text-gray-100 text-sm p-3"
                      >{{ link.label }}</a
                    >
                  </div>
                </div>
              </ng-container>
            </nav>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <section class="transition-all ease-in-out duration-500 bg-white dark:bg-gray-600 dark:text-gray-300">
        <header class="flex-none relative text-sm leading-6 font-medium" [ngClass]="{ 'py-5': !showSearchBar }">
          <div class="px-4">
            <div class="flex justify-between">
              <div class="flex">
                <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2 hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>

                <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2 hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>

                <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2 md:hidden">
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex-1 flex justify-between" [ngClass]="{ 'my-4': showSearchBar }">
                <div class="flex-1 flex" (clickOutside)="showAllComponents()">
                  <form class="w-full flex md:ml-0" action="#" method="GET">
                    <label for="search_field" class="sr-only">Search</label>
                    <div class="relative w-full text-gray-400 focus-within:theme-color-500">
                      <div
                        class="absolute inset-y-0 left-2 flex items-center cursor-pointer"
                        (click)="hideShowSearchBar()"
                      >
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
                        class="block w-full dark:bg-gray-800 focus:outline-none border border-gray-300 rounded-full bg-white dark:text-gray-100 h-full pl-8 pr-3 text-gray-900 placeholder-gray-500  focus:placeholder-gray-400 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div class="relative -mr-1.5 sm:mr-0">
                <div class="ml-4 flex items-center md:ml-6" [ngClass]="{ 'mt-4': showSearchBar }">
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
            </div>
          </div>
        </header>
        <hr />
        <main class="flex-1 h-full w-full mx-auto overflow-auto dark:bg-gray-900">
          <router-outlet *ngIf="true"></router-outlet>
        </main>
      </section>
    </div>
  `,
})
export class WebUiSidebarDenseComponent {
  public showMenu = false
  public asideWidth: string = 'w-20'
  public asideWidthPl: string = 'sm:pl-20'

  public mobileSideBar: boolean = false
  public showSearchBar: boolean = false

  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
  constructor(public searchService: ServiceCodepreview) {}

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
