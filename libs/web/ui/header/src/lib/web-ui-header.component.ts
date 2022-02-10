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
                  class="hidden dark:bg-gray-900 dark:text-white  md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                >
                  <div class="max-w-2xl mx-auto">
                    <div
                      class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
                      </div>
                      <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                  alt="Neil image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                              </div>
                              <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                              >
                                $320
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                  alt="Bonnie image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                              </div>
                              <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                              >
                                $3467
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                  alt="Michael image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                              </div>
                              <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                              >
                                $67
                              </div>
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                  alt="Lana image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                              </div>
                              <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                              >
                                $367
                              </div>
                            </div>
                          </li>
                          <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img
                                  class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                  alt="Thomas image"
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomes Lean</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                              </div>
                              <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                              >
                                $2367
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                <div *ngIf="moreCard" class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                  <div class="absolute inset-0 flex">
                    <div class="bg-white dark:bg-gray-900 dark:text-white w-1/2"></div>
                    <div class="bg-gray-50 dark:bg-gray-900 dark:text-white w-1/2"></div>
                  </div>
                  <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <nav
                      class="grid gap-y-10 px-4 py-8 dark:bg-gray-900 dark:text-white bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
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

      <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    </div>
  `,
})
export class WebUiHeaderComponent {
  @Input() contactCard: Contact
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
interface Contact {
  id?: number
  title?: string
  icon?: string
}
interface Buttons {
  text?: string
  backColor?: string
}
