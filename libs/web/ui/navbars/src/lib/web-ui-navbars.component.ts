import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-navbars',
  template: `
    <nav class="bg-{{ background }}-600 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              (click)="smMenuItem = !smMenuItem"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                class="hidden h-6 w-6"
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
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <a
                  href="javascript:void(0)"
                  class="text-gray-300 dark:text-gray-100 dark:hover:text-white hover:bg-{{
                    background
                  }}-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                  *ngFor="let item of menuItems"
                  >{{ item.menu }}</a
                >
              </div>
            </div>

            <div
              *ngIf="quickAction == 'search'"
              class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
            >
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full dark:bg-white dark:shadow dark:border-gray-900 bg-gray-100 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm dark:placeholder-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 dark:focus:placeholder-gray-400 focus:placeholder-gray-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div *ngIf="quickAction == 'button'" class="flex-shrink-0 mr-3">
              <button
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-{{
                  background
                }}-500 hover:bg-{{
                  background
                }}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                <!-- Heroicon name: solid/plus -->
                <svg
                  class="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>New Job</span>
              </button>
            </div>
            <button
              class="bg-transparent p-1 dark:text-gray-900 dark:bg-white dark:hover:text-gray-500 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
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

            <div class="ml-3 relative">
              <div (click)="onClick()">
                <button
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                *ngIf="isMenu"
                class="origin-top-right absolute dark:text-gary-700 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gary-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  *ngFor="let i of optionList"
                  >{{ i.item }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu" *ngIf="smMenuItem">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="text-gray-300 dark:text-gary-700 dark:text-gray-700 dark:hover:text-white hover:bg-{{
              background
            }}-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            *ngFor="let item of menuItems"
            >{{ item.menu }}</a
          >
        </div>
      </div>
    </nav>
  `,
})
export class WebUiNavbarsComponent {
  public isMenu = false
  public smMenuItem = false
  public onClick() {
    this.isMenu = !this.isMenu
  }

  @Input() menuItems?: Array<any>
  @Input() optionList?: Array<any>
  @Input() quickAction?: string
  @Input() background?: string
}
