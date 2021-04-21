import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-slide-over-layout',
  template: `
    <section
      class="fixed inset-0 overflow-hidden z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" aria-hidden="true"></div>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen" [ngClass]="width ? width : 'max-w-md'">
            <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div class="flex-1 h-0 overflow-y-auto">
                <ng-container *ngIf="headerObj">
                  <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h2 class="text-lg font-medium text-white" id="slide-over-title">
                        {{ headerObj.name }}
                      </h2>
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
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
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-indigo-300">
                        {{ headerObj.title }}
                      </p>
                    </div>
                  </div>
                </ng-container>
                <ng-container *ngIf="!headerObj">
                  <div class="p-4  sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
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
                      <form>
                        <div class="mt-1">
                          <input
                            type="text"
                            name="project_name"
                            id="project_name"
                            class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <ng-container *ngIf="footerObj">
                <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                  <ng-container *ngFor="let buttonAction of footerObj">
                    <button
                      type="{{ buttonAction.type }}"
                      class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-{{
                        buttonAction.color
                      }}-600 hover:bg-{{
                        buttonAction.color
                      }}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {{ buttonAction.name }}
                    </button>
                  </ng-container>
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
  @Input() headerObj?: { id: string; title: string }
  @Input() footerObj?: { id: string; name: string; type: string; color: string }[]
}
