import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'enterprise-header-layout',
  template: `
    <div class="flex flex-col flex-auto items-center w-full min-w-0 bg-gray-200 dark:bg-card">
      <div
        class="relative flex flex-col flex-0 justify-center w-full h-16 sm:h-20 md:h-36 overflow-hidden z-49 shadow dark:shadow-none print:hidden"
      >
        <div class="relative dark flex flex-auto justify-center w-full px-4 md:px-8 bg-gray-800 dark:bg-gray-900">
          <div class="flex items-center w-full max-w-360 h-16 sm:h-20">
            <div class="flex items-center">
              <a href="/components" class="flex-none text-gray-900">
                <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="w-24" alt="App Logo" />
              </a>
            </div>
          </div>
        </div>
        <header
          class="flex-none relative text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5"
        >
          <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-28 flex items-center ">
            <div class="ml-auto flex items-center">
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
                class="absolute top-full right-0 w-60 mt-3 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5 font-normal text-sm text-gray-900 divide-y divide-gray-100"
              >
                <p class="py-3 px-3.5 truncate">
                  <span class="block mb-0.5 text-xs text-gray-500">Signed in as</span>
                  <span class="font-semibold">{{ user?.email }}</span>
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
        </header>
      </div>
      <div class="flex flex-auto justify-center w-full sm:p-6 md:p-8">
        <div
          class="flex flex-col flex-auto w-full sm:max-w-360 sm:shadow-lg sm:rounded-lg sm:overflow-hidden bg-white dark:bg-gray-900"
        >
          <main class="flex-1 h-full overflow-auto">
            <router-outlet></router-outlet>
          </main>
        </div>
      </div>
    </div>
  `,
})
export class EnterpriseHeaderComponent {
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
