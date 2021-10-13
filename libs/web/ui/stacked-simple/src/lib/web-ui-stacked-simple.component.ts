import { Component, HostListener, Input } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '@schema-driven/web/core/data-access'
import { ServiceCodepreview } from '../../../codepreview.service'

@Component({
  selector: 'ui-stacked-simple',
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
              <ng-container hidden="">
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
    <header
      class="flex-none relative text-sm leading-6 font-medium dark:bg-gray-600 text-gray-900 dark:text-gray-300 dark:ring-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5"
    >
      <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-28 flex items-center ">
        <a href="/components" class="flex-none">
          <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-12" alt="App Logo" />
        </a>
        <div class="ml-auto flex items-center">
          <ng-container>
            <a class="hidden sm:block hover:text-gray-900 mx-4 cursor-pointer" (click)="isActive = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          <ng-container *ngFor="let link of profileLinks">
            <a class="hidden sm:block hover:text-gray-900 mx-4" [routerLink]="link.route">
              {{ link.label }}
            </a>
          </ng-container>
        </div>
        <div class="relative sm:border-l -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6 border-gray-200">
          <button type="button" class="font-medium flex items-center" aria-expanded="true" (click)="openMenu()">
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
              <svg width="20" height="20" fill="none">
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
        </div>
      </div>
      <div
        *ngIf="showMenu"
        class="absolute top-full right-32 w-60 -mr-0.2 sm:-mr-3.5 bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5 font-normal text-sm text-gray-900 divide-y divide-gray-100"
      >
        <p class="py-3 px-3.5 truncate">
          <span class="block mb-0.5 text-xs text-gray-500">Signed in as</span>
          <span class="font-semibold">{{ user?.email }}</span>
        </p>
        <div class="py-1.5 px-3.5">
          <!-- Menu or icons -->
        </div>
      </div>
    </header>
    <main class="flex-1 h-full overflow-auto bg-white dark:bg-gray-900">
      <router-outlet *ngIf="true"></router-outlet>
    </main>
  `,
})
export class WebUiStackedSimpleComponent {
  constructor(public searchService: ServiceCodepreview, public router: Router) {}
  public showMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }
  public componentList
  isActive: boolean = false
  ngOnInit(): void {
    this.searchService.searchIcon$.next([])
    this.searchService.searchedArray$.next([])
    this.searchService.searchedArray$.subscribe((res) => {
      this.componentList = res
    })
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
    this.isActive = false
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
