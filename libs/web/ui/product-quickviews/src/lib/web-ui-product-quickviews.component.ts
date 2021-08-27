import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-quickviews',
  template: `
    <div class="w-full bg-white dark:bg-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="relative group flex flex-col-reverse h-96 w-96">
        <div
          class="mt-4 flex items-center justify-between text-base font-medium text-gray-900 dark:text-gray-100 space-x-8"
        >
          <h3>
            <a href="#">
              {{ title }}
            </a>
          </h3>
          <p>{{ '$' + price }}</p>
        </div>
        <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-01-preview.jpg"
            alt="Front of women's Basic Tee in black."
            class="object-center object-cover"
          />
          <div class="flex items-end p-4">
            <button
              type="button"
              class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100"
              (click)="modalShow = true"
            >
              Quick View<span class="sr-only">, Women's Basic Tee</span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="fixed z-10 inset-0 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        [ngClass]="{ 'ease-out duration-300 invisible': modalShow == false }"
      >
        <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0;">
          <div
            class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
            aria-hidden="true"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>

          <div
            class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl"
          >
            <div
              class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
              <button
                (click)="modalShow = false"
                type="button"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span class="sr-only">Close</span>
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

              <div
                class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                  <img
                    src="{{ image }}"
                    alt="Back of women&#039;s Basic Tee in black."
                    class="object-center object-cover"
                  />
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-xl font-medium text-gray-900 sm:pr-12">
                    {{ title }}
                  </h2>

                  <section aria-labelledby="information-heading" class="mt-1">
                    <h3 id="information-heading" class="sr-only">Product information</h3>

                    <p class="font-medium text-gray-900">
                      {{ '$' + price }}
                    </p>

                    <!-- Reviews -->
                    <div class="mt-4">
                      <h4 class="sr-only">Reviews</h4>
                      <div class="flex items-center">
                        <p class="text-sm text-gray-700">
                          {{ user_rating }}
                          <span class="sr-only"> out of 5 stars</span>
                        </p>
                        <div class="ml-1 flex items-center">
                          <!--
                            Heroicon name: solid/star

                            Active: "text-yellow-400", Default: "text-gray-200"
                          -->
                          <ng-container *ngFor="let in of [1, 2, 3, 4, 5]; let i = index">
                            <svg
                              class="h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              [ngClass]="[user_rating > i ? 'text-yellow-400' : 'text-gray-500']"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>
                        </div>
                        <div class="hidden ml-4 lg:flex lg:items-center">
                          <span class="text-gray-300" aria-hidden="true">&middot;</span>
                          <a href="#" class="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >See all 512 reviews</a
                          >
                        </div>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" class="mt-8">
                    <h3 id="options-heading" class="sr-only">Product options</h3>

                    <form>
                      <!-- Color picker -->
                      <ng-container *ngIf="variants[0].color">
                        <div>
                          <h4 class="text-sm font-medium text-gray-900">Color</h4>

                          <fieldset class="mt-2">
                            <legend class="sr-only">Choose a color</legend>
                            <div class="flex items-center space-x-3">
                              <label
                                *ngFor="let color of variants[0].color"
                                class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900"
                              >
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="Black"
                                  class="sr-only"
                                  aria-labelledby="color-choice-0-label"
                                />
                                <p id="color-choice-0-label" class="sr-only">Black</p>
                                <span
                                  aria-hidden="true"
                                  class="h-8 w-8 bg-{{
                                    color.values
                                  }}-900 border border-black border-opacity-10 rounded-full"
                                ></span>
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </ng-container>

                      <!-- Size picker -->
                      <ng-container *ngIf="variants[1].size">
                        <div class="mt-8">
                          <div class="flex items-center justify-between">
                            <h4 class="text-sm font-medium text-gray-900">Size</h4>
                            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                          </div>

                          <fieldset class="mt-2">
                            <legend class="sr-only">Choose a size</legend>
                            <div class="grid grid-cols-7 gap-2">
                              <label
                                *ngFor="let size of variants[1].size"
                                class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XXS"
                                  class="sr-only"
                                  aria-labelledby="size-choice-0-label"
                                />
                                <p id="size-choice-0-label">
                                  {{ size.values }}
                                </p>
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </ng-container>

                      <button
                        type="submit"
                        class="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {{ btnText }}
                      </button>

                      <p class="absolute top-4 left-4 text-center sm:static sm:mt-8">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductQuickviewsComponent {
  @Input() image?: String
  @Input() title?: String
  @Input() user_rating?: number
  @Input() price?: number
  @Input() variants?: Variant[]
  @Input() btnText?: String

  modalShow: boolean = true
}

interface Variant {
  color?: Values[]
  size?: Values[]
}

interface Values {
  values?: string
}
