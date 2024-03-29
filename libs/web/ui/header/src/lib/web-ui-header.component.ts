import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <div class="relative bg-white dark:bg-gray-900 dark:text-white">
      <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
      <div class="relative z-20">
        <div
          class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
        >
          <div>
            <a class="flex">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white dark:bg-gray-900 dark:text-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex-1 md:flex md:items-center md:justify-between ">
            <nav class="flex space-x-10">
              <div>
                <button
                  type="button"
                  (click)="toggleSolution()"
                  class="text-gray-500 dark:bg-gray-900 dark:text-white group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span>Solutions</span>
                  <ui-icon
                    size="lg"
                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                    icon="chevronDown"
                  ></ui-icon>
                </button>

                <div
                  *ngIf="solutionsCard"
                  class="hidden dark:bg-gray-900 dark:text-white  md:block absolute z-10 top-full transform shadow-lg bg-white w-3/12"
                >
                  <ul class=" list-reset flex flex-col">
                    <li class=" rounded-t relative -mb-px block border p-4 border-grey">Demo Data 1</li>
                    <li class="relative -mb-px block border p-4 border-grey">Demo Data 2</li>
                    <li class="relative -mb-px block border p-4 border-grey">Demo Data 3</li>
                    <li class="relative -mb-px block border p-4 border-grey">Demo Data 4</li>
                  </ul>
                </div>
              </div>
              <button
                (click)="reset()"
                class="text-gray-500 group dark:bg-gray-900 dark:text-white bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Pricing
              </button>
              <button
                (click)="reset()"
                class="text-gray-500 group dark:bg-gray-900 dark:text-white bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Docs
              </button>
              <div>
                <button
                  type="button"
                  (click)="togglemoreCard()"
                  class="text-gray-500 group dark:bg-gray-900 dark:text-white bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span>More</span>

                  <ui-icon
                    size="lg"
                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                    icon="chevronDown"
                  ></ui-icon>
                </button>
                <div *ngIf="moreCard" class="hidden md:block absolute z-10 top-full transform shadow-lg w-3/12">
                  <div class="absolute">
                    <div class="bg-white"></div>
                    <div class="bg-gray-50 dark:bg-gray-900 dark:text-white w-1/2"></div>
                  </div>
                  <div class="relative max-w-7xl mx-auto ">
                    <nav
                      class=" px-4 py-8 dark:bg-gray-900 dark:text-white bg-white sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium dark:bg-gray-900 dark:text-white tracking-wide text-gray-500 uppercase"
                        >
                          Company
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="information_circle"></ui-icon>
                              <span class="ml-4">About</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="office"></ui-icon>
                              <span class="ml-4">Customers</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="newspaper"></ui-icon>
                              <span class="ml-4">Press</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="briefcase"></ui-icon>
                              <span class="ml-4">Careers</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="shieldCheck"></ui-icon>
                              <span class="ml-4">Privacy</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
            <div class="flex items-center md:ml-12">
              <button
                class="text-base dark:bg-gray-900 dark:text-white ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </button>
              <button
                class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiHeaderComponent {
  @Input() headernav: Header
  @Input() buttons: Buttons

  solutionsCard: boolean = false
  moreCard: boolean = false

  toggleSolution() {
    this.solutionsCard = !this.solutionsCard
    this.moreCard = false
  }
  togglemoreCard() {
    this.moreCard = !this.moreCard
    this.solutionsCard = false
  }
  reset() {
    this.solutionsCard = false
    this.moreCard = false
  }
}
interface Header {
  id?: number
  title?: string
  icon?: string
}
interface Buttons {
  text?: string
  backColor?: string
}
