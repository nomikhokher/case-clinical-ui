import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
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
              <!-- Heroicon name: outline/menu -->
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
                  <div
                    class="max-w-7xl dark:bg-gray-900 dark:text-white mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex flex-col justify-between rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <ui-icon size="lg" class="h-6 w-6" icon="chartBar"></ui-icon>
                          </span>
                        </div>
                        <div
                          class="ml-4 dark:bg-gray-900 dark:text-white md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                        >
                          <div>
                            <p class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-900">
                              Analytics
                            </p>
                            <p class="mt-1 text-sm  text-gray-500">
                              Get a better understanding of where your traffic is coming from.
                            </p>
                          </div>
                          <p class="mt-2  text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="-m-3 p-3 flex flex-col justify-between dark:bg-gray-900 dark:text-white rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <ui-icon size="lg" class="h-6 w-6" icon="cursor"></ui-icon>
                          </span>
                        </div>
                        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-900">
                              Engagement
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              Speak directly to your customers in a more meaningful way.
                            </p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="-m-3 p-3 flex flex-col dark:bg-gray-900 dark:text-white  justify-between rounded-lg hover:bg-gray-50 "
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <ui-icon size="lg" class="h-6 w-6" icon="sheild_check"></ui-icon>
                          </span>
                        </div>
                        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium dark:bg-gray-900 dark:text-white text-gray-900">Security</p>
                            <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="-m-3 p-3 flex flex-col dark:bg-gray-900 dark:text-white justify-between rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <ui-icon size="lg" class="h-6 w-6" icon="viewGrid"></ui-icon>
                          </span>
                        </div>
                        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-900">
                              Integrations
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              Connect with third-party tools that you&#039;re already using.
                            </p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-900 dark:text-white">
                    <div
                      class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div class="flow-root">
                        <a
                          class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <ui-icon size="lg" class="h-6 w-6" icon="play"></ui-icon>
                          <span class="ml-3">Watch Demo</span>
                        </a>
                      </div>

                      <div class="flow-root">
                        <a
                          class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <ui-icon size="lg" class="h-6 w-6" icon="check-circle"></ui-icon>
                          <span class="ml-3">View All Products</span>
                        </a>
                      </div>

                      <div class="flow-root">
                        <a
                          class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <ui-icon size="lg" class="h-6 w-6" icon="phone"></ui-icon>
                          <span class="ml-3">Contact Sales</span>
                        </a>
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
                      <div>
                        <h3
                          class="text-sm dark:bg-gray-900 dark:text-white font-medium tracking-wide text-gray-500 uppercase"
                        >
                          Resources
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="userGroup"></ui-icon>
                              <span class="ml-4">Community</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="globeAlt"></ui-icon>
                              <span class="ml-4">Partners</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="bookMark"></ui-icon>
                              <span class="ml-4">Guides</span>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a
                              class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <ui-icon size="lg" class="h-6 w-6" icon="desktopComputer"></ui-icon>
                              <span class="ml-4">Webinars</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-gray-50 dark:bg-gray-900 dark:text-white px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium dark:bg-gray-900 dark:text-white tracking-wide text-gray-500 uppercase"
                        >
                          From the blog
                        </h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li class="flow-root">
                            <a class="-m-3 p-3 flex dark:bg-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                              <div class="hidden sm:block flex-shrink-0">
                                <img
                                  class="w-32 h-20 object-cover rounded-md"
                                  src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                                  alt=""
                                />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4
                                  class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-900 truncate"
                                >
                                  Boost your conversion rate
                                </h4>
                                <p class="mt-1 dark:bg-gray-900 dark:text-white text-sm text-gray-500">
                                  Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra
                                  tempor id mus.
                                </p>
                              </div>
                            </a>
                          </li>

                          <li class="flow-root">
                            <a class="-m-3 p-3 dark:bg-gray-900 dark:text-white flex rounded-lg hover:bg-gray-100">
                              <div class="hidden sm:block flex-shrink-0">
                                <img
                                  class="w-32 h-20 object-cover rounded-md"
                                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                                  alt=""
                                />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4
                                  class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-900 truncate"
                                >
                                  How to use search engine optimization to drive traffic to your site
                                </h4>
                                <p class="mt-1 dark:bg-gray-900 dark:text-white text-sm text-gray-500">
                                  Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra
                                  tempor id mus.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <a class="text-indigo-600 hover:text-indigo-500">
                          View all posts <span aria-hidden="true">&rarr;</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div class="flex items-center md:ml-12">
              <button class="text-base dark:bg-gray-900 dark:text-white font-medium text-gray-500 hover:text-gray-900">
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

/**<div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div
          class="rounded-lg dark:bg-gray-900 dark:text-white shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button       
                  type="button"
                  class="bg-white dark:bg-gray-900 dark:text-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <ui-icon size="lg" class="h-6 w-6" icon="chartBar"></ui-icon>
                    </div>
                    <div class="ml-4 dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900">
                      Analytics
                    </div>
                  </a>

                  <a class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <ui-icon size="lg" class="h-6 w-6" icon="cursor"></ui-icon>
                    </div>
                    <div class="ml-4 dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900">
                      Engagement
                    </div>
                  </a>

                  <a class="-m-3 flex items-center p-3 dark:hover:bg-gray-900  dark:hover:text-white rounded-lg ">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <ui-icon size="lg" class="h-6 w-6" icon="shield-check"></ui-icon>
                    </div>
                    <div class="ml-4 dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900">
                      Security
                    </div>
                  </a>

                  <a class="-m-3 flex items-center p-3 rounded-lg dark:hover:bg-gray-900 dark:hover:text-white ">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <ui-icon size="lg" class="h-6 w-6" icon="viewGrid"></ui-icon>
                    </div>
                    <div class="ml-4 dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900">
                      Integrations
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <a class="font-medium text-indigo-600 hover:text-indigo-500">
                    View all products <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <button
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </button>

              <a
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Company
              </a>

              <a
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Resources
              </a>

              <a
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>

              <a
                class="rounded-md dark:bg-gray-900 dark:text-white text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact Sales
              </a>
            </div>
            <div class="mt-6">
              <a
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p class="mt-6 text-center dark:bg-gray-900 dark:text-white text-base font-medium text-gray-500">
                Existing customer?
                <a class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
              </p>
            </div>
          </div>
        </div>
      </di */
