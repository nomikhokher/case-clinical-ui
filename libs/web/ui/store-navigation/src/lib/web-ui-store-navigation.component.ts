import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-store-navigation',
  template: `
    <div class="bg-white">
      <!--
      Mobile menu

      Off-canvas menu for mobile, show/hide based on off-canvas menu state.
      (clickOutside)="outsideClick()"
    -->
      <div
        class="fixed flex lg:hidden"
        role="dialog"
        aria-modal="true"
        [ngClass]="openMenu == true ? 'inset-0 z-40' : 'opacity-0 z-0'"
      >
        <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div
          class="fixed bg-black bg-opacity-25 transition-opacity ease-linear duration-300"
          [ngClass]="openMenu == true ? 'opacity-100 inset-0' : 'opacity-0'"
          aria-hidden="true"
        ></div>

        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
        <div
          [ngClass]="openMenu == true ? 'translate-x-0' : '-translate-x-full'"
          class="relative max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl pb-12 flex flex-col overflow-y-auto transition ease-in-out duration-300 transform"
        >
          <div class="px-4 pt-5 pb-2 flex">
            <button
              (click)="openMenu = false"
              type="button"
              class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400 dark:text-gray-200"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
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

          <!-- Links -->
          <div class="mt-2">
            <div class="border-b border-gray-200">
              <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 dark:text-gray-100 border-transparent" -->
                <ng-container *ngFor="let tab of tabs; let i = index">
                  <button
                    (click)="getProducts(tab.id)"
                    *ngIf="i < 2"
                    [ngClass]="tab.id == selectedTab ? 'border-indigo-600 text-indigo-600' : 'border-transparent '"
                    class="flex-1 text-gray-200 whitespace-nowrap py-4 px-1 border-b-2 focus:outline-none text-base font-medium"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    {{ tab.title }}
                  </button>
                </ng-container>
              </div>
            </div>

            <!-- 'Women' tab panel, show/hide based on tab state. -->
            <div
              id="tabs-1-panel-1"
              class="px-4 py-6 space-y-12"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabindex="0"
            >
              <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                <ng-container *ngFor="let product of products">
                  <div class="group relative" *ngIf="selectedTab == product.tab_id">
                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img
                        src="{{ product.image }}"
                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                        class="object-center object-cover"
                      />
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="mt-6 block text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                      {{ product.title }}
                    </a>
                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ btnText }}</p>
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <div class="flow-root">
              <a href="#" class="-m-2 p-2 block font-medium text-gray-900 dark:text-gray-100">Company</a>
            </div>

            <div class="flow-root">
              <a href="#" class="-m-2 p-2 block font-medium text-gray-900 dark:text-gray-100">Stores</a>
            </div>
          </div>

          <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <div class="flow-root">
              <a href="#" class="-m-2 p-2 block font-medium text-gray-900 dark:text-gray-100">Create an account</a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 p-2 block font-medium text-gray-900 dark:text-gray-100">Sign in</a>
            </div>
          </div>

          <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <!-- Currency selector -->
            <form>
              <div class="inline-block">
                <label for="mobile-currency" class="sr-only">Currency</label>
                <div
                  class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="mobile-currency"
                    name="currency"
                    class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                  >
                    <option *ngFor="let currency of currencies">{{ currency.title }}</option>
                  </select>
                  <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      class="w-5 h-5 text-gray-500 dark:text-gray-300"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 8l4 4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <header class="relative">
        <nav aria-label="Top">
          <!-- Top navigation -->
          <div class="bg-gray-900">
            <div
              class="max-w-7xl dark:text-gray-300 mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8"
            >
              <!-- Currency selector -->
              <form>
                <div>
                  <label for="desktop-currency" class="sr-only">Currency</label>
                  <div
                    class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                  >
                    <select
                      id="desktop-currency"
                      name="currency"
                      class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      <option *ngFor="let currency of currencies">{{ currency.title }}</option>
                    </select>
                    <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        class="w-5 h-5 text-gray-300"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div class="flex items-center space-x-6">
                <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
                <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
              </div>
            </div>
          </div>

          <!-- Secondary navigation -->
          <div class="bg-white dark:bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="border-b border-gray-200">
                <div class="h-16 flex items-center justify-between">
                  <!-- Logo (lg+) -->
                  <div class="hidden lg:flex-1 lg:flex lg:items-center">
                    <a href="javascript:void(0)">
                      <span class="sr-only">Workflow</span>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="hidden h-full lg:flex">
                    <div class="px-4 bottom-0 inset-x-0">
                      <div class="h-full flex justify-center space-x-8">
                        <ng-container *ngIf="tabs">
                          <div class="flex" *ngFor="let tab of tabs">
                            <div class="relative flex">
                              <button
                                (click)="getProducts(tab.id)"
                                type="button"
                                class="hover:text-gray-800 dark:text-gray-100 relative z-10 flex items-center focus:outline-none transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                [ngClass]="
                                  tab.id == selectedTab ? 'border-indigo-600 text-indigo-600' : 'border-transparent '
                                "
                                aria-expanded="false"
                              >
                                {{ tab.title }}
                              </button>
                            </div>
                            <div class="absolute top-full inset-x-0 text-sm text-gray-500 dark:text-gray-300">
                              <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                              <div class="relative bg-white dark:bg-gray-800 z-10">
                                <div class="max-w-7xl mx-auto px-8">
                                  <div class="grid grid-cols-4 gap-y-10 gap-x-8">
                                    <ng-container *ngFor="let product of products">
                                      <div
                                        class="group relative"
                                        *ngIf="selectedTab == product.tab_id"
                                        [ngClass]="selectedTab == product.tab_id ? 'py-16' : ''"
                                      >
                                        <div
                                          class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 dark:bg-gray-800 overflow-hidden group-hover:opacity-75"
                                        >
                                          <img
                                            src="{{ product.image }}"
                                            alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                            class="object-center object-cover"
                                          />
                                        </div>
                                        <a href="#" class="mt-4 block font-medium text-gray-900 dark:text-gray-100">
                                          <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                                          {{ product.title }}
                                        </a>
                                        <p aria-hidden="true" class="mt-1">{{ btnText }}</p>
                                      </div>
                                    </ng-container>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ng-container>
                      </div>
                    </div>
                  </div>
                  <!-- Mobile menu and search (lg-) -->
                  <div class="flex-1 flex items-center lg:hidden">
                    <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                    <button
                      (click)="openMenu = true"
                      type="button"
                      class="-ml-2 bg-white dark:bg-gray-800 p-2 rounded-md text-gray-400 dark:text-gray-200"
                    >
                      <span class="sr-only">Open menuhdfjdfj</span>
                      <!-- Heroicon name: outline/menu -->
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
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>

                    <!-- Search -->
                    <a href="#" class="ml-2 p-2 text-gray-400 dark:text-gray-200 hover:text-gray-500 ">
                      <span class="sr-only">Search</span>
                      <!-- Heroicon name: outline/search -->
                      <svg
                        class="w-6 h-6"
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </a>
                  </div>

                  <!-- Logo (lg-) -->
                  <a href="#" class="lg:hidden">
                    <span class="sr-only">Workflow</span>
                    <img
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                      class="h-8 w-auto"
                    />
                  </a>

                  <div class="flex-1 flex items-center justify-end">
                    <a
                      href="#"
                      class="hidden text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-gray-800 lg:block"
                    >
                      Search
                    </a>

                    <div class="flex items-center lg:ml-8">
                      <!-- Help -->
                      <a href="#" class="p-2 text-gray-400 dark:text-gray-200 hover:text-gray-500 lg:hidden">
                        <span class="sr-only">Help</span>
                        <!-- Heroicon name: outline/question-mark-circle -->
                        <svg
                          class="w-6 h-6"
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
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        class="hidden text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-gray-800 lg:block"
                        >Help</a
                      >

                      <!-- Cart -->
                      <div class="ml-4 flow-root lg:ml-8">
                        <a href="#" class="group -m-2 p-2 flex items-center">
                          <!-- Heroicon name: outline/shopping-bag -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 group-hover:text-gray-500"
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
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span class="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  `,
})
export class WebUiStoreNavigationComponent {
  @Input() products: Products[]
  @Input() tabs: Tabs[]
  @Input() currencies: Currency[]
  @Input() btnText: String

  openMenu: boolean = false

  public selectedTab = 0

  getProducts(tabId) {
    this.selectedTab = tabId
  }
  outsideClick() {
    if (this.openMenu == true) {
      // this.openMenu = false
    }
  }
}

interface Products {
  tab_id?: number
  title?: String
  image?: String
}

interface Tabs {
  id?: number
  title?: String
}

interface Currency {
  id?: number
  title?: String
}
