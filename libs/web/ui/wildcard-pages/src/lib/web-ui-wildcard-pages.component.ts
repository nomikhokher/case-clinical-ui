import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-wildcard-pages',
  template: `
    <!-- This style is for split with image -->
    <ng-container *ngIf="pageStyle == 'splitWithImage'">
      <div class="bg-white dark:bg-gray-800 min-h-screen flex flex-col lg:relative">
        <div class="flex-grow flex flex-col">
          <main class="flex-grow flex flex-col bg-white dark:bg-gray-800">
            <div class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div class="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" class="inline-flex">
                  <span class="sr-only">Workflow</span>
                  <img class="h-12 w-auto" src="{{ logo }}" alt="Workflow logo" />
                </a>
              </div>
              <div class="flex-shrink-0 my-auto py-16 sm:py-32">
                <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{{ statusCode }} error</p>
                <h1 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
                  {{ pageTitle }}
                </h1>
                <p class="mt-2 text-base text-gray-500 dark:text-gray-300">{{ message }}</p>
                <div class="mt-6">
                  <a href="{{ linkToRedirect }}" class="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >{{ btnText }}<span aria-hidden="true"> &rarr;</span></a
                  >
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="absolute inset-0 h-full w-full object-cover" src="{{ backImage }}" alt="" />
        </div>
      </div>
    </ng-container>

    <!-- This is style Simple with logo -->
    <ng-container *ngIf="pageStyle == 'simpleWithLogo'">
      <div class="min-h-screen pt-16 pb-12 flex flex-col bg-white dark:bg-gray-800">
        <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex-shrink-0 flex justify-center">
            <a href="/" class="inline-flex">
              <span class="sr-only">Workflow</span>
              <img class="h-12 w-auto" src="{{ logo }}" alt="" />
            </a>
          </div>
          <div class="py-16">
            <div class="text-center">
              <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{{ statusCode }} error</p>
              <h1 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
                {{ pageTitle }}
              </h1>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-300">{{ message }}</p>
              <div class="mt-6">
                <a href="{{ linkToRedirect }}" class="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >{{ btnText }}<span aria-hidden="true"> &rarr;</span></a
                >
              </div>
            </div>
          </div>
        </main>
      </div>
    </ng-container>

    <!-- This is style With background image -->
    <ng-container *ngIf="pageStyle == 'withBackgroundImage'">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <main class="min-h-screen bg-cover bg-top sm:bg-top" style="background-image: url('{{ backImage }}');">
        <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p class="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">{{ statusCode }} error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">{{ pageTitle }}</h1>
          <p class="mt-2 text-lg font-medium text-black text-opacity-50">{{ message }}</p>
          <div class="mt-6">
            <a
              href="{{ linkToRedirect }}"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              {{ btnText }}
            </a>
          </div>
        </div>
      </main>
    </ng-container>
  `,
})
export class WebUiWildcardPagesComponent {
  @Input() pageStyle: string
  @Input() logo: string
  @Input() statusCode: number
  @Input() pageTitle: string
  @Input() message: string
  @Input() btnText: string
  @Input() linkToRedirect: string
  @Input() backImage: string
}
