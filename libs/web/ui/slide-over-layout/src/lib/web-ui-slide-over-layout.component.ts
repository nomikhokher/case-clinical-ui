import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-slide-over-layout',
  template: `
    <section
      class="fixed inset-0 overflow-hidden z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" aria-hidden="true"></div>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen" [ngClass]="width ? width : 'max-w-md'">
            <div class="h-full divide-y divide-gray-200 flex flex-col bg-white dark:bg-gray-800 shadow-xl">
              <div class="flex-1 h-0 overflow-y-auto">
                <ng-container *ngIf="slideOverHeader">
                  <ng-content select="#headerSlideOverLayout"></ng-content>
                </ng-container>
                <ng-container *ngIf="!slideOverHeader">
                  <div class="p-4  sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title"></h2>
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    </div>
                  </div>
                </ng-container>
                <div class="flex-1 flex flex-col justify-between">
                  <div class="px-4 divide-y divide-gray-200 sm:px-6">
                    <div class="space-y-6 pt-6 pb-5">
                      <ng-content select="#mainSlideOverLayout"></ng-content>
                    </div>
                  </div>
                </div>
              </div>
              <ng-container *ngIf="slideOverFooter">
                <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                  <ng-content select="#footerSlideOverLayout"></ng-content>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WebUiSlideOverLayoutComponent {
  @Input() width?: string
  @Input() slideOverHeader?: boolean
  @Input() slideOverFooter?: boolean
}
