import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-two-column-stacked-list',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li>
          <a href="javascript:void(0)" class="block hover:bg-gray-50 dark:hover:bg-gray-600">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12 rounded-full" src="{{ img }}" alt="" />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">{{ name }}</p>
                    <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300">
                      <!-- Heroicon name: solid/mail -->
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span class="truncate">{{ email }}</span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div *ngIf="twoColumnStackedList == 'true' || twoColumnStackedList === true">
                      <p class="text-sm text-gray-900 dark:text-gray-100">
                        <time datetime="2020-01-07">{{ date }}</time>
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {{ status }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Heroicon name: solid/chevron-right -->
              <ui-icon size="lg" class="h-6 w-6 text-gray-500 dark:text-gray-300" [icon]="'chevronRight'"></ui-icon>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class WebUiTwoColumnStackedListComponent {
  @Input() twoColumnStackedList: boolean | string
  @Input() id?: string
  @Input() name?: string
  @Input() img?: string
  @Input() status?: string
  @Input() date?: string
  @Input() email?: string
}
