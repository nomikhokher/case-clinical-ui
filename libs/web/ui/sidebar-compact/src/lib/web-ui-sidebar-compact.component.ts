import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
import { WebLayoutLink } from '@schema-driven/web/layout'
import { ServiceCodepreview } from '../../../codepreview.service'

@Component({
  selector: 'ui-sidebar-compact',
  styleUrls: ['./web-ui-sidebar-compact.scss'],
  template: `
    <div class="h-screen bg-gray-50 flex overflow-hidden">
      <!-- Narrow sidebar -->
      <span (clickOutside)="compact.show = false; this.compact.index = null">
        <div class="hidden w-28 theme-bg-600 dark:theme-bg-900 overflow-y-auto aside-scrollbar md:block">
          <div class="w-full h-screen py-6 flex flex-col items-center">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div class="flex-1 mt-6 w-full px-4 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
              <ng-container *ngFor="let link of links">
                <a
                  [routerLink]="link.route"
                  routerLinkActive="theme-bg-500"
                  class="theme-color-100 hover:theme-bg-700 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium cursor-pointer"
                >
                  <ui-icon
                    [icon]="link.icon"
                    size="lg"
                    class="text-indigo-300 group-hover:text-gray-300 flex justify-center items-center h-8 w-8 "
                  ></ui-icon>
                  <span class="mt-2"> {{ link.name }}</span>
                </a>
              </ng-container>
            </div>
          </div>
        </div>
      </span>

      <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
      <div class="md:hidden" role="dialog" aria-modal="true" *ngIf="mobileSideBar">
        <div class="fixed inset-0 z-40 flex">
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
          <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
            <!--
              Close button, show/hide based on off-canvas menu state.

              Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="absolute top-1 right-0 -mr-14 p-1">
              <button
                type="button"
                class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  (click)="mobileSideBar = false"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="sr-only">Close sidebar</span>
              </button>
            </div>

            <div class="flex-shrink-0 px-4 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="mt-4">
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
                </div>
              </nav>
            </div>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Content area -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="w-full">
          <div
            class="relative z-10 flex-shrink-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm flex"
          >
            <button
              type="button"
              class="border-r border-gray-200 dark:border-gray-700 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
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
                    <div class="absolute inset-y-0 right-4 flex space-x-2 top-2">
                      <span class="DocSearch-Button-Key"
                        ><svg width="15" height="15" class="DocSearch-Control-Key-Icon">
                          <path
                            d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                            stroke-width="1.2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="square"
                          ></path></svg
                      ></span>
                      <span class="DocSearch-Button-Key">K</span>
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
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </header>

        <!-- Main content -->
        <div class="flex-1 flex items-stretch overflow-hidden dark:bg-gray-900">
          <main class="flex-1 overflow-y-auto aside-scrollbar">
            <!-- Primary column -->
            <section
              aria-labelledby="primary-heading"
              class="min-w-0 flex-1 h-auto flex flex-col overflow-hidden lg:order-last"
            >
              <router-outlet *ngIf="true"></router-outlet>
            </section>
          </main>

          <!-- Secondary column (hidden on smaller screens) -->
          <!-- <aside
            class="hidden w-96 p-16 bg-white dark:bg-gray-900 dark:text-white border-gray-200 overflow-y-auto aside-scrollbar lg:block"
          >
            Your content
            <div class="container">
              <h1>Application UI</h1>
              <p>
                Form layouts, tables, modal windows — everything you need to build beautiful responsive web
                applications.
              </p>
            </div>
          </aside> -->
        </div>
      </div>
    </div>
  `,
})
export class WebUiSidebarCompactComponent {
  public showMenu = false
  public compact = {
    show: false,
    index: null,
  }
  public asideWidth: string = 'left-0'
  public subChildren: any
  public mobileSideBar: boolean = false
  public showSearchBar: boolean = false

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

  compactChildren(subChilds, index) {
    if (this.compact.index === index) {
      this.compact.show = false
      this.compact.index = null
      this.asideWidth = 'left-0'
    } else {
      this.compact.index = index
      this.subChildren = subChilds
      this.compact.show = true
      this.asideWidth = 'left-28'
    }
  }

  asideBarWith() {
    if (this.asideWidth == 'left-28') {
      this.asideWidth = 'left-0'
    } else {
      this.asideWidth = 'left-28'
    }
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
