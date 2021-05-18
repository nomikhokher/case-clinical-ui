import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'thin-header-layout',
  template: `
    <div id="header">
      <aside
        class="hidden w-28 text-gray-900 leading-6 bg-white fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-3 flex justify-between">
          <a href="/components" class="m-3">
            <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-10" alt="App Logo" />
          </a>
        </div>
        <div class="p-3 h-auto">
          <!-- Extract: menu_items -->
          <ng-container *ngFor="let link of profileLinks">
            <div class="p-5 w-full text-center">
              <a
                [routerLink]="link.route"
                (click)="compact = !compact"
                class="text-gray-900 hover:text-white text-sm font-medium"
              >
                <svg
                  class="text-gray-900 group-hover:text-gray-300 mx-auto h-7 w-7"
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
              </a>
            </div>
          </ng-container>
        </div>
      </aside>

      <aside
        *ngIf="compact"
        class="hidden w-64 text-gray-900 leading-6 bg-white fixed inset-y-0 left-28 z-50 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      ></aside>

      <section class="sm:pl-28">
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
export class ThinHeaderComponent {
  public showMenu = false
  public compact = false

  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }
}
