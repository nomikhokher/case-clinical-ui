import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'classy-header-layout',
  template: `
    <div id="header">
      <aside
        class="hidden w-{{
          asideWidth
        }} transition-all ease-in-out duration-500 text-gray-900 leading-6 bg-indigo-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-4 h-auto">
          <div class="p-3 flex justify-between">
            <a href="/components" class="mt-3">
              <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-5" alt="App Logo" />
            </a>
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

          <div class="px-6 pb-6 pt-3 flex items-center border-b border-gray-500 sm:flex-col">
            <div class="mr-auto w-full flex-shrink-0 flex justify-center items-center rounded-full sm:mt-4 sm:mx-auto">
              <img
                src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                height="50%"
                width="50%"
                class="rounded-full"
              />
            </div>
            <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
              <div class="text-white text-2xl">William</div>
              <div class="text-white text-2xl sm:text-sm">william@gmail.com</div>
            </div>
          </div>

          <!-- Extract: menu_items -->
          <div class="mt-4">
            <ng-container *ngFor="let link of profileLinks">
              <a
                [routerLink]="link.route"
                class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center w-56  px-2 py-2 text-sm font-medium rounded-md"
              >
                <ui-icon
                  [icon]="link.icon"
                  size="lg"
                  class="text-indigo-300 group-hover:text-gray-300 h-8 w-8 pt-1"
                ></ui-icon>

                {{ link.label }}
              </a>
            </ng-container>
          </div>
        </div>
      </aside>

      <section
        class="sm:pl-{{
          asideWidth
        }} transition-all ease-in-out duration-500 bg-white dark:bg-gray-600 dark:text-gray-300"
      >
        <header class="flex-none w-full relative text-sm leading-6 font-medium py-5">
          <div class="px-4">
            <div class="flex justify-between">
              <div class="dark:hover:bg-gray-900 hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  (click)="asideBarWith()"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6">
                <div class="flex justify-between pl-2 ml-auto space-x-2">
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
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
export class ClassyHeaderLayout {
  public showMenu = false
  public asideWidth: number = 64

  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }

  asideBarWith() {
    if (this.asideWidth == 64) {
      this.asideWidth = 0
    } else {
      this.asideWidth = 64
    }
  }
}
