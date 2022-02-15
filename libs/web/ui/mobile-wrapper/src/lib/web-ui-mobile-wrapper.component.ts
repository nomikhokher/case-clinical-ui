import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-wrapper',
  template: `
    <div class="border-1 border-black bg-gray-500">
      <div class="absolute left-3">
        <textarea class="h-mobile w-code mt-3">
        <div>
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
        </div>
      </textarea
        >
      </div>
      <div
        class="absolute right-6 border-8 border-t-8 border-black rounded-lg mx-auto mt-2 bg-gray-200 h-mobile w-mobile"
      >
        <div class="pt-8 bg-white"></div>
        <h1>test</h1>
        <!-- <ng-content></ng-content> -->
      </div>
    </div>
  `,
})
export class WebUiMobileWrapperComponent {}
