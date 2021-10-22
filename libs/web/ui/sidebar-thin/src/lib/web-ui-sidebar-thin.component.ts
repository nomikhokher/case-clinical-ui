import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '@schema-driven/web/core/data-access'
import { ServiceCodepreview } from '../../../codepreview.service'

@Component({
  selector: 'ui-sidebar-thin',
  styleUrls: ['./web-ui-sidebar-thin.scss'],
  template: `
    <div>
      <ng-container *ngIf="isActive">
        <div
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="true"
          class="fixed z-50 pt-16 flex items-start justify-center inset-0 sm:pt-24"
        >
          <div
            (click)="outsideClick()"
            x-transition:enter="ease-out duration-200"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="ease-in duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="fixed inset-0 bg-gray-800 bg-opacity-60 transition-opacity"
          ></div>
          <div
            x-transition:enter="ease-out duration-200"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="ease-in duration-150"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            class="relative transform transition-all max-w-lg w-full px-4"
          >
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <form
                role="search"
                novalidate=""
                class="relative flex items-center pr-4 justify-center"
                :class="search ? 'shadow-sm' : ''"
              >
                <input
                  (input)="onSearch($event)"
                  style="caret-color: #6b7280"
                  class="flex-auto -mr-9 appearance-none bg-transparent pl-4 pr-12 py-4 text-gray-600 text-base sm:text-sm placeholder-gray-500 focus:outline-none w-full"
                  placeholder="Find components..."
                  #searchBarInput
                />
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  class="flex-none text-gray-400 pointer-events-none absolute right-7 top-4"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="5.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M17.25 17.25L13 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </form>
              <ng-container>
                <ul
                  class="text-sm font-medium overflow-y-auto border-t border-gray-200 divide-y divide-gray-200 rounded-b-lg max-h-80 "
                >
                  <li *ngFor="let item of componentList">
                    <a
                      (click)="redirectTo(item)"
                      tabindex="-1"
                      class="flex cursor-pointer text-gray-600 justify-between p-4 hover:bg-gray-100 hover:theme-color-500"
                    >
                      <span class="whitespace-nowrap">{{ item.label }}</span>
                      <img class="w-1/2 h-auto" src="{{ item.image }}" alt="" />
                    </a>
                  </li>
                </ul>
              </ng-container>

              <div
                x-show="search &amp;&amp; results.length === 0"
                class="bg-gray-50 p-16 text-center"
                style="display: none;"
              >
                <h2 class="text-gray-900 font-semibold mb-2">No results found</h2>
                <p class="text-sm">
                  We can’t find anything with that term at the moment, try searching something else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="h-screen flex bg-gray-50 overflow-hidden">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true" *ngIf="mobileSideBar">
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
        <div class="relative flex-1 flex flex-col max-w-xs w-full theme-bg-600 dark:theme-bg-900 focus:outline-none">
          <!--
            Close button, show/hide based on off-canvas menu state.

            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="absolute top-0 right-0 -mr-12 pt-4">
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
                (click)="mobileSideBar = false"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="mt-5 flex-1 h-0 overflow-y-auto aside-scrollbar">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <nav aria-label="Sidebar" class="mt-5">
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
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" class="flex-shrink-0 group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium text-white group-hover:text-gray-900">Emily Selman</p>
                  <p class="text-sm font-medium text-white group-hover:text-gray-700">Account Settings</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-20 h-screen">
          <div class="flex flex-col h-0 flex-1 overflow-y-auto theme-bg-600 dark:theme-bg-900">
            <div class="flex-1 flex flex-col">
              <div class="flex-shrink-0 theme-bg-600 dark:theme-bg-900 py-4 flex items-center justify-center">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <nav aria-label="Sidebar" class="py-6 flex flex-col items-center space-y-3">
                <ng-container>
                  <a
                    class="flex items-center p-4 rounded-lg text-indigo-100 hover:theme-bg-300 hover:text-white cursor-pointer"
                  >
                    <svg
                      (click)="isActive = true"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-white cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </a>
                </ng-container>
                <ng-container *ngFor="let link of links; index as i">
                  <a
                    routerLink="{{ link.route }}"
                    routerLinkActive="theme-bg-300"
                    class="flex items-center p-4 rounded-lg text-indigo-100 hover:theme-bg-300 hover:text-white cursor-pointer"
                    [ngClass]="i == compact.index && 'theme-bg-700'"
                  >
                    <ui-icon
                      [icon]="link.icon"
                      size="lg"
                      class="dark:text-white h-6 w-6 flex justify-center items-center"
                    ></ui-icon>
                    <span class="sr-only"> {{ link.label }}</span>
                  </a>
                </ng-container>
              </nav>
            </div>
            <div class="flex-shrink-0 flex pb-5">
              <a href="javascript:void(0)" class="flex-shrink-0 w-full">
                <img
                  class="block mx-auto h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div class="sr-only">
                  <p>Emily Selman</p>
                  <p>Account settings</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
        <!-- Mobile top navigation -->
        <div class="lg:hidden">
          <div class="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div>
              <button
                type="button"
                (click)="mobileSideBar = true"
                class="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <main class="flex-1 h-full overflow-auto bg-white dark:bg-gray-900">
          <router-outlet *ngIf="true"></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class WebUiSidebarThinComponent {
  public showMenu = false
  public asideWidth: number = 20
  public subChildren: any
  public compact = {
    show: false,
    index: null,
  }
  public mobileSideBar: boolean = false
  public componentList
  public isActive: boolean = false

  @ViewChild('searchBarInput', { static: false }) searchBarInput: ElementRef | undefined
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  constructor(
    public searchService: ServiceCodepreview,
    public router: Router,
    private readonly cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.searchService.searchIcon$.next([])
    this.searchService.searchedArray$.next([])
    this.searchService.searchedArray$.subscribe((res) => {
      this.componentList = res
    })
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.isActive = false
  }
  @HostListener('document:keydown.control.k', ['$event']) onKeydownHandlerSearch(event: KeyboardEvent) {
    event.preventDefault()
    this.isActive = !this.isActive
    this.cdRef.detectChanges()
    this.searchBarInput?.nativeElement.focus()
  }

  onSearch(e: any) {
    this.searchService.searchIcon$.next(e.target.value)
  }
  outsideClick() {
    this.isActive = false
    this.searchService.searchIcon$.next([])
    this.componentList = []
  }
  redirectTo(i) {
    this.router.navigate([`dev/${i.route}`])
    this.outsideClick()
  }
}
