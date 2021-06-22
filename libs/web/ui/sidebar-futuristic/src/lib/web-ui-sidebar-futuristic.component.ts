import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'ui-sidebar-futuristic',
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
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="h-screen flex overflow-hidden bg-white">
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true" *ngIf="mobileSideBar">
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
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 theme-bg-600 dark:theme-bg-900">
          <!--
            Close button, show/hide based on off-canvas menu state.

            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              (click)="mobileSideBar = false"
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
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto aside-scrollbar">
            <nav class="px-2 space-y-1">
              <div>
                <ng-container *ngFor="let link of links">
                  <div class="relative group">
                    <div class="p-3 my-3 rounded-md">
                      <p class="uppercase text-gray-100 text-sm font-semibold">{{ link.title }}</p>
                      <p class="capitalize text-gray-200 text-xs opacity-75">{{ link.subTitle }}</p>
                    </div>
                    <ng-container *ngFor="let child of link.childs">
                      <a
                        [routerLink]="child.route"
                        class="text-indigo-100 relative hover:theme-bg-400 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        (click)="child.dropDown = !child.dropDown"
                      >
                        <ui-icon
                          [icon]="child.icon"
                          size="lg"
                          class="text-indigo-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
                        ></ui-icon>
                        {{ child.label }}
                        <span class="absolute right-2" *ngIf="child.children">
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
                              *ngIf="!child.dropDown"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                              *ngIf="child.dropDown"
                            />
                          </svg>
                        </span>
                      </a>

                      <div *ngIf="child.dropDown" class="theme-bg-500 rounded-md my-1">
                        <ng-container *ngFor="let children of child.children">
                          <a
                            (click)="children.dropDown = !children.dropDown"
                            [routerLink]="children.route"
                            class="text-indigo-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                          >
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
                            <a
                              *ngFor="let subChildren of children.children"
                              [routerLink]="subChildren.route"
                              class="text-indigo-100 hover:theme-bg-400 pl-14 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                            >
                              &nbsp;{{ subChildren.label }}
                            </a>
                          </div>
                        </ng-container>
                      </div>
                    </ng-container>
                  </div>
                </ng-container>
              </div>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t theme-border-200 p-4">
            <a href="#" class="flex-shrink-0 group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium text-white">Tom Cook</p>
                  <p class="text-sm font-medium text-indigo-200 group-hover:text-white">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden theme-bg-600 dark:theme-bg-900 md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col h-0 flex-1">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto aside-scrollbar">
              <div class="flex items-center flex-shrink-0 px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav class="mt-5 flex-1 px-2 space-y-1">
                <div class="mt-4">
                  <ng-container *ngFor="let link of links">
                    <div class="relative group">
                      <ng-container *ngIf="!link.children">
                        <a
                          [routerLink]="link.route"
                          class="theme-color-100 relative hover:theme-bg-500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        >
                          <ui-icon
                            [icon]="link.icon"
                            size="lg"
                            class="theme-color-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
                          ></ui-icon>
                          {{ link.label }}
                        </a>
                      </ng-container>

                      <ng-container *ngIf="link.children">
                        <div class="p-3 my-3 rounded-md">
                          <p class="uppercase theme-color-100 text-sm font-semibold">{{ link.title }}</p>
                          <p class="capitalize theme-color-200 text-xs opacity-80">{{ link.subTitle }}</p>
                        </div>
                        <ng-container *ngFor="let child of link.children">
                          <a
                            [routerLink]="child.route"
                            class="theme-color-100 relative hover:theme-bg-500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            (click)="child.dropDown = !child.dropDown"
                          >
                            <ui-icon
                              [icon]="child.icon"
                              size="lg"
                              class="theme-color-300 group-hover:text-gray-300 h-8 w-8 mr-3 pt-1"
                            ></ui-icon>
                            {{ child.label }}
                            <span class="absolute right-2" *ngIf="child.children">
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
                                  *ngIf="!child.dropDown"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 9l-7 7-7-7"
                                  *ngIf="child.dropDown"
                                />
                              </svg>
                            </span>
                          </a>

                          <div *ngIf="child.dropDown" class="theme-bg-500 rounded-md my-1">
                            <ng-container *ngFor="let children of child.children">
                              <a
                                (click)="children.dropDown = !children.dropDown"
                                [routerLink]="children.route"
                                class="theme-color-100 hover:theme-bg-400 pl-12 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                              >
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
                                <a
                                  *ngFor="let subChildren of children.children"
                                  [routerLink]="subChildren.route"
                                  class="text-indigo-100 hover:theme-bg-400 pl-14 hover:text-white group flex items-center w-full py-2 text-sm font-medium rounded-md"
                                >
                                  &nbsp;{{ subChildren.label }}
                                </a>
                              </div>
                            </ng-container>
                          </div>
                        </ng-container>
                      </ng-container>
                    </div>
                  </ng-container>
                </div>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t theme-border-500 p-4">
              <a href="#" class="flex-shrink-0 w-full group block">
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-white">Tom Cook</p>
                    <p class="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
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
        </div>
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none dark:bg-gray-900">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1> -->
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div class="h-auto">
                  <router-outlet></router-outlet>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class WebUiSidebarFuturisticComponent {
  public showMenu = false
  public mobileSideBar: boolean = false

  // public asideWidth: number = 72
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string
  // asideBarWith() {
  //   if (this.asideWidth == 72) {
  //     this.asideWidth = 0
  //   } else {
  //     this.asideWidth = 72
  //   }
  // }
}
