import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-slide-over',
  template: `
    <!-- <section class="relative inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0" aria-hidden="true"></div>

    <div class="fixed right-8 pr-32">
      
      <div class="w-screen max-w-md">
        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
          <div class="px-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                Panel title
              </h2>
              <div class="ml-3 h-7 flex items-center">
                <button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close panel</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <div class="absolute inset-0 px-4 sm:px-6">
              <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->

    <!-- This example requires Tailwind CSS v2.0+ -->
    <section
      class="fixed inset-0 overflow-hidden z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" [ngClass]="overlay ? overlay : ''" aria-hidden="true"></div>

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen" [ngClass]="width ? width : 'max-w-md'">
            <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div class="px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
                  <ng-container *ngIf="!closeButtonOutSide">
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span class="sr-only">Close panel</span>
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </ng-container>
                  <ng-container *ngIf="closeButtonOutSide">
                    <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </ng-container>
                </div>
              </div>
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WebUiSlideOverComponent {
  @Input() width?: string
  @Input() overlay?: string
  @Input() closeButtonOutSide?: boolean
}
