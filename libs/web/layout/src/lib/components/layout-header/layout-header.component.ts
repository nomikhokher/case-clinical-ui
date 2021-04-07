import { User } from '@schema-driven/web/core/data-access'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'layout-header',
  template: `
    <div class="relative z-10 flex-shrink-0 flex h-16 bg-indigo-700 shadow">
      <button
        type="button"
        class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
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
      <div class="flex-1 px-4 flex justify-between">
        <div class="flex-1 flex items-center">
          <div class="flex-shrink-0">
            <div class="flex-shrink-0">
              <a routerLink="/">
                <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-8 w-8" alt="App Logo" />
              </a>
            </div>
          </div>
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <div class="mr-4 flex items-baseline space-x-4 text-indigo-100 ">
            <ng-container *ngFor="let link of links">
              <a
                [routerLink]="link.route"
                [routerLinkActive]="['text-white', 'bg-indigo-800']"
                class="px-3 py-2 rounded-md text-sm font-medium hover:text-whit hover:bg-indigo-600 cursor-pointer"
                >{{ link.label }}</a
              >
            </ng-container>
          </div>
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
                (click)="showProfileLinks = !showProfileLinks"
                class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img *ngIf="user?.avatarUrl" class="h-8 w-8 rounded-full" [src]="user?.avatarUrl" alt="" />
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
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white  dark:bg-gray-700 dark:text-gray-300 ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
              [class.block]="showProfileLinks"
              [class.hidden]="!showProfileLinks"
            >
              <ng-container *ngFor="let link of profileLinks">
                <a
                  [routerLink]="link.route"
                  (click)="showProfileLinks = false"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  role="menuitem"
                >
                  {{ link.label }}
                </a>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LayoutHeaderComponent {
  showProfileLinks = false
  showMobileMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
}
