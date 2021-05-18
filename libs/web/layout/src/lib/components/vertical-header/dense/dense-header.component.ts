import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'dense-header-layout',
  template: `
    <div id="header">
      <aside
        class="hidden w-24 hover:w-64 hover:z-10 text-gray-900 leading-6 bg-indigo-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <!-- <div class="p-3 flex justify-between">
          <a href="/components" class="m-3">
            <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-10" alt="App Logo" />
          </a>
        </div> -->
        <div class="p-3 h-auto">
          <!-- Extract: menu_items -->
          <ng-container *ngFor="let link of profileLinks">
            <a
              [routerLink]="link.route"
              class="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center w-56  px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                class="text-indigo-300 group-hover:text-gray-300 mr-12 h-8 w-8"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {{ link.label }}
            </a>
          </ng-container>
        </div>
      </aside>
      <section class="sm:pl-24">
        <header
          class="flex-none w-full relative text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5"
        >
          <div class="px-4">
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
              <!-- <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6">
          right side 
      </div> -->
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
export class DenseHeaderComponent {
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
