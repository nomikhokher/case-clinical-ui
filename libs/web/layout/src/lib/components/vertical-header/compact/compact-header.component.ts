import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'compact-header-layout',
  styles: [
    `
      .aside-scrollbar::-webkit-scrollbar {
        width: 8px;
      }

      .aside-scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      .aside-scrollbar::-webkit-scrollbar-thumb {
        background: var(--theme-color-400) !important;
        border-radius: 12px;
      }

      .aside-scrollbar::-webkit-scrollbar-thumb:hover {
        background: var(--theme-color-300) !important;
      }
    `,
  ],
  template: `
    <div id="header">
      <aside
        class="hidden aside-scrollbar w-{{
          asideWidth
        }} transition-all ease-in-out duration-500  text-gray-900 leading-6 theme-bg-600 dark:theme-bg-900 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-3 flex justify-between">
          <a href="/components" class="m-3">
            <img *ngIf="logo" [attr.src]="logo" [attr.loading]="'lazy'" class="h-10" alt="App Logo" />
          </a>
        </div>
        <div class="p-3 h-auto">
          <!-- Extract: menu_items -->
          <ng-container *ngFor="let link of profileLinks; index as i">
            <div class="p-5 w-full text-center">
              <a
                (click)="compactChildren(link.childs, i)"
                class="text-indigo-100 hover:text-white text-sm font-medium cursor-pointer"
              >
                <ui-icon
                  [icon]="link.icon"
                  size="lg"
                  class="text-indigo-300 group-hover:text-gray-300 mx-auto h-7 w-7"
                ></ui-icon>
                {{ link.title }}
              </a>
            </div>
          </ng-container>
        </div>
      </aside>

      <aside
        *ngIf="compact.show"
        class="hidden aside-scrollbar w-64 text-gray-900 leading-6 theme-bg-500 dark:theme-bg-800 fixed inset-y-0 left-36 z-50 overflow-x-hidden overflow-y-auto sm:block ring-2 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <!-- Extract: menu_items -->
          <div class="mt-4">
            <div class="relative group">
              <div class="theme-bg-500 rounded-md my-1">
                <ng-container *ngFor="let children of subChildren">
                  <a
                    (click)="children.dropDown = !children.dropDown"
                    [routerLink]="children.route"
                    class="text-indigo-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                  >
                    <ui-icon
                      [icon]="children.icon"
                      size="lg"
                      class="text-indigo-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
                    ></ui-icon>
                    &nbsp;{{ children.label }}
                    <span class="absolute right-2" *ngIf="children.children">
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
                    </span>
                  </a>
                  <div *ngIf="children.dropDown" class="theme-bg-300 rounded-md">
                    <ng-container *ngFor="let subChildrenLink of children.children">
                      <a
                        [routerLink]="subChildrenLink.route"
                        class="text-indigo-100 hover:theme-bg-400 pl-24 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                        (click)="subChildrenLink.dropDown = !subChildrenLink.dropDown"
                      >
                        &nbsp;{{ subChildrenLink.label }}
                        <span class="absolute right-2" *ngIf="subChildrenLink.children">
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
                              *ngIf="!subChildrenLink.dropDown"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                              *ngIf="subChildrenLink.dropDown"
                            />
                          </svg>
                        </span>
                      </a>
                      <ng-container *ngIf="subChildrenLink.dropDown">
                        <a
                          *ngFor="let subChildrenLnkRoute of subChildrenLink.children"
                          [routerLink]="subChildrenLnkRoute.route"
                          class="text-indigo-100 hover:theme-bg-400 pl-32 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                        >
                          &nbsp;{{ subChildrenLnkRoute.label }}
                        </a>
                      </ng-container>
                    </ng-container>
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section
        class="sm:pl-{{
          asideWidth
        }} transition-all ease-in-out duration-500 bg-white dark:bg-gray-600 dark:text-gray-300"
      >
        <header class="flex-none w-full relative text-sm leading-6 font-medium py-5 theme-bg-100 dark:theme-bg-50">
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
              <!-- <div class="relative -mr-1.5 sm:ml-2 sm:mr-0 sm:pl-6">
              right side 
          </div> -->
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
export class CompactHeaderComponent {
  public showMenu = false
  public compact = {
    show: false,
    index: null,
  }
  public asideWidth: number = 36
  public subChildren: any

  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }

  compactChildren(subChilds, index) {
    if (this.compact.index === index) {
      this.compact.show = false
      this.compact.index = null
    } else {
      this.compact.index = index
      this.subChildren = subChilds
      this.compact.show = true
    }
  }

  asideBarWith() {
    if (this.asideWidth == 36) {
      this.asideWidth = 0
    } else {
      this.asideWidth = 36
    }
  }
}
