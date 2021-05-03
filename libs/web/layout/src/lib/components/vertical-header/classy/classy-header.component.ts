import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'classy-header-layout',
  template: `
    <div id="header">
      <aside
        class="hidden w-64 text-gray-900 leading-6 bg-white fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
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
                <span class="font-semibold">mrhammaddev@gmail.com</span>
              </p>
              <div class="py-1.5 px-3.5">
                <ng-container *ngFor="let link of profileLinks">
                  <a
                    [routerLink]="link.route"
                    (click)="showProfileLinks = false"
                    class="group flex sm:hidden items-center py-1.5 hover:text-teal-600"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="flex-none mr-3 text-gray-400 group-hover:text-teal-600"
                    >
                      <rect x="2.75" y="2.75" width="5.5" height="5.5" rx="1"></rect>
                      <rect x="2.75" y="11.75" width="5.5" height="5.5" rx="1"></rect>
                      <rect x="11.75" y="11.75" width="5.5" height="5.5" rx="2.75"></rect>
                      <path
                        d="M13.616 3.305a1 1 0 011.79.004l1.731 3.498a1 1 0 01-.896 1.443H12.76a1 1 0 01-.894-1.448l1.751-3.497z"
                      ></path>
                    </svg>
                    {{ link.label }}
                  </a>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 min-h-full">
          <div class="px-6 pb-6 flex items-center border-b border-gray-500 sm:flex-col">
            <div class="hidden px-3 text-gray-900 text-base rounded-full border sm:block">Username</div>
            <div
              class="mr-auto text-gray-900 flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto"
            >
              <svg class="fill-current w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 24 24">
                <path
                  d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"
                />
              </svg>
            </div>
            <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
              <div class="text-gray-900 text-2xl sm:hidden">Username</div>
              <div class="text-yellow-500 text-xl sm:text-sm">10.000 BET</div>
            </div>
          </div>

          <!-- Extract: menu_items -->
          <div class="mt-4">
            <ng-container *ngFor="let link of profileLinks">
              <a
                [routerLink]="link.route"
                class="px-10 py-2 flex items-center text-xl text-gray-900 hover:text-orange-500 sm:px-4 sm:text-base"
              >
                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 71">
                  <path
                    d="M28.559 5.848c2.665-6.75 12.217-6.75 14.882 0l.691 1.751a8 8 0 009.784 4.712l1.8-.551c6.938-2.125 12.895 5.343 9.279 11.635l-.938 1.632a8 8 0 002.416 10.587l1.553 1.063c5.988 4.1 3.862 13.413-3.311 14.51l-1.86.284a8 8 0 00-6.771 8.49l.136 1.877c.528 7.238-8.079 11.382-13.408 6.457l-1.382-1.277a8 8 0 00-10.86 0l-1.382 1.277c-5.33 4.925-13.936.78-13.408-6.457l.136-1.877a8 8 0 00-6.77-8.49l-1.86-.285c-7.174-1.096-9.3-10.409-3.312-14.509l1.553-1.063a8 8 0 002.416-10.587l-.938-1.632c-3.616-6.292 2.34-13.76 9.28-11.635l1.799.55a8 8 0 009.784-4.71l.69-1.752z"
                    fill="none"
                  />
                </svg>
                <div class="ml-6 flex-1 sm:ml-4">{{ link.label }}</div>

                <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z" />
                </svg>
              </a>
            </ng-container>
          </div>
        </div>
      </aside>

      <section class="sm:pl-64">
        <header
          class="flex-none w-full relative text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5"
        >
          <div class="px-4 sm:px-6 lg:px-28">
            <div class="flex justify-between">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
        <main class="flex-1 h-full overflow-auto">
          <router-outlet></router-outlet>
        </main>
      </section>
    </div>
  `,
})
export class ClassyHeaderLayout {
  public showMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }
}
