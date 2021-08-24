import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-overviews',
  template: `
    <div class="bg-white dark:bg-gray-700">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button
                  id="tabs-1-tab-1"
                  class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  *ngFor="let img of selectedImages || product.images"
                  (click)="coverImage(img.image)"
                >
                  <p class="sr-only">Angled view</p>
                  <div class="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src="{{ img.image }}"
                      alt="Angled front view with bag zipped and handles upright."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                  <div
                    class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </button>

                <!-- More images... -->
              </div>

              <div class="w-full max-w-2xl mx-auto mt-2 lg:max-w-none lg:mt-8 lg:col-span-4">
                <div>
                  <div class="border-b dark:border-indigo-600 border-gray-200">
                    <div class="-mb-px flex space-x-8" aria-orientation="horizontal" role="tablist">
                      <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300" -->
                      <button
                        id="tab-reviews"
                        class="border-transparent text-gray-700 dark:text-white hover:text-gray-800 hover:border-gray-300 whitespace-nowrap py-6 border-b-2 dark:border-b-0 font-medium text-sm focus:outline-none"
                        aria-controls="tab-panel-reviews"
                        role="tab"
                        type="button"
                        [ngClass]="
                          tabTile === 'Customer Reviews' && 'border-indigo-600 text-indigo-600 dark:text-white z-10'
                        "
                        (click)="tabTile = 'Customer Reviews'"
                      >
                        Customer Reviews
                      </button>
                      <button
                        id="tab-faq"
                        class="border-transparent text-gray-700 dark:text-white hover:text-gray-800 hover:border-gray-300 whitespace-nowrap py-6 border-b-2 font-medium text-sm focus:outline-none"
                        aria-controls="tab-panel-faq"
                        role="tab"
                        type="button"
                        [ngClass]="tabTile === 'FAQ' && 'border-indigo-600 text-indigo-600 dark:text-white'"
                        (click)="tabTile = 'FAQ'"
                      >
                        FAQ
                      </button>
                      <button
                        id="tab-license"
                        class="border-transparent text-gray-700 dark:text-white hover:text-gray-800 hover:border-gray-300 whitespace-nowrap py-6 border-b-2 font-medium text-sm focus:outline-none"
                        aria-controls="tab-panel-license"
                        role="tab"
                        type="button"
                        [ngClass]="tabTile === 'License' && 'border-indigo-600 text-indigo-600 dark:text-white'"
                        (click)="tabTile = 'License'"
                      >
                        License
                      </button>
                    </div>
                  </div>

                  <!-- 'Customer Reviews' panel, show/hide based on tab state -->
                  <div
                    id="tab-panel-reviews"
                    class="-mb-10"
                    aria-labelledby="tab-reviews"
                    role="tabpanel"
                    tabindex="0"
                    *ngIf="tabTile === 'Customer Reviews'"
                  >
                    <h3 class="sr-only">Customer Reviews</h3>

                    <div class="flex text-sm text-gray-500 space-x-4 " *ngFor="let review of product.reviews_customer">
                      <div class="flex-none py-10">
                        <img src="{{ review.url }}" alt="" class="w-10 h-10 bg-gray-100 rounded-full" />
                      </div>
                      <div class="py-10 border-b border-gray-200">
                        <h3 class="font-medium text-gray-900 dark:text-white">{{ review.name }}</h3>
                        <p>
                          <time datetime="2021-07-12" class="dark:text-white">{{ review.created_at }}</time>
                        </p>

                        <div class="flex items-center mt-4">
                          <!--
                            Heroicon name: solid/star

                            Active: "text-yellow-400", Default: "text-gray-300"
                          -->
                          <ng-container *ngIf="review.rating === 1">
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>

                          <ng-container *ngIf="review.rating === 2">
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>

                          <ng-container *ngIf="review.rating === 3">
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>

                          <ng-container *ngIf="review.rating === 4">
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>

                          <ng-container *ngIf="review.rating === 5">
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>

                            <svg
                              class="text-yellow-400 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </ng-container>
                        </div>
                        <p class="sr-only">5 out of 5 stars</p>

                        <div class="mt-4 prose prose-sm max-w-none text-gray-500">
                          <p class="dark:text-white">
                            Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is
                            optimized out of the box so I can use it directly with confidence. It would take me several
                            hours to create a single icon this good, so it's a steal at this price.
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- More reviews... -->
                  </div>

                  <!-- 'FAQ' panel, show/hide based on tab state -->
                  <ng-container *ngIf="tabTile === 'FAQ'">
                    <dl
                      id="tab-panel-faq"
                      class="text-sm text-gray-500"
                      aria-labelledby="tab-faq"
                      role="tabpanel"
                      tabindex="0"
                      *ngFor="let faqs of product.faqs"
                    >
                      <h3 class="sr-only">Frequently Asked Questions</h3>

                      <dt class="mt-10 font-medium text-gray-900 dark:text-white">{{ faqs.question }}</dt>
                      <dd class="mt-2 prose prose-sm max-w-none text-gray-500 dark:text-white">
                        <p>{{ faqs.answer }}.</p>
                      </dd>

                      <!-- More FAQs... -->
                    </dl>
                  </ng-container>

                  <!-- 'License' panel, show/hide based on tab state -->
                  <div
                    id="tab-panel-license"
                    class="pt-10"
                    aria-labelledby="tab-license"
                    role="tabpanel"
                    tabindex="0"
                    *ngIf="tabTile === 'License'"
                  >
                    <h3 class="sr-only">License</h3>

                    <div class="prose prose-sm max-w-none text-gray-500">
                      <ng-container *ngFor="let license of product.license">
                        <h4 class="font-bold text-gray-900 dark:text-white">{{ license.heading }}</h4>

                        <p *ngIf="license.description" class="my-5 dark:text-white">
                          {{ license.description }}
                        </p>

                        <ul class="m-5 list-disc text-gray-400 dark:text-white">
                          <li
                            *ngFor="let license_detail of license.license_detail"
                            class="text-gray-500 dark:text-white"
                          >
                            {{ license_detail.detail }}
                          </li>
                        </ul>
                      </ng-container>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img
                  src="{{ coverImg }}"
                  alt="Angled front view with bag zipped and handles upright."
                  class="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>

              <!-- More images... -->
            </div>
          </div>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900 dark:text-white">{{ '$' }}{{ product.price }}</p>
            </div>

            <div class="mt-4">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <p class="text-sm text-gray-700 dark:text-white">
                  {{ product.review.total_rating }}
                </p>
                <div class="ml-1 flex items-center">
                  <!--
                  Heroicon name: solid/star

                  Active: "text-yellow-400", Inactive: "text-gray-200"
                -->
                  <svg
                    class="text-yellow-400 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
                <div class="ml-4 flex">
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >See all {{ product.review.reviews }} reviews</a
                  >
                </div>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div class="text-base text-gray-700 dark:text-white space-y-6">
                <p>
                  {{ product.description }}
                </p>
              </div>
            </div>

            <form class="mt-6" *ngFor="let item of product.variants">
              <!-- Colors -->
              <div>
                <h3 class="text-sm text-gray-600 dark:text-white">Color</h3>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">
                    <label
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                      [ngClass]="{ 'ring-2 ring-gray-600 dark:ring-gray-100': selectRing == undefined }"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Washed Black"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only"></p>
                      <span
                        (click)="changeColor(product.images)"
                        aria-hidden="true"
                        class="h-8 w-8 bg-gray-600 border text-center font-bold text-gray-100 text-lg border-black border-opacity-10 rounded-full"
                        >D</span
                      >
                    </label>

                    <label
                      *ngFor="let color of item.color"
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center text-gray-100 justify-center cursor-pointer focus:outline-none ring-gray-700 dark:ring-gray-100"
                      [ngClass]="selectRing == color.values ? 'ring-2 ' + 'ring-' + selectRing + '-700' : ''"
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value="Washed Black"
                        class="sr-only"
                        aria-labelledby="color-choice-0-label"
                      />
                      <p id="color-choice-0-label" class="sr-only">{{ color.values }}</p>
                      <span
                        (click)="changeColor(color)"
                        aria-hidden="true"
                        class="h-8 w-8 bg-{{
                          color.values
                        }}-700 border border-black dark:ring-gray-100 border-opacity-10 rounded-full"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900 dark:text-white">Size</h2>
                </div>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                    <label
                      class="border rounded-md py-3 dark:text-white px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                      *ngFor="let size of item.size"
                      [ngClass]="
                        size.values == checkSize && 'text-white ring ring-offset-1 ring-indigo-600 bg-indigo-600'
                      "
                    >
                      <input
                        type="radio"
                        name="size-choice"
                        [value]="size.values"
                        class="sr-only"
                        aria-labelledby="size-choice-0-label"
                        (click)="changeSize(size.values)"
                      />
                      <p id="size-choice-0-label">{{ size.values }}</p>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 dark:text-white hover:bg-gray-100 hover:text-gray-500"
                >
                  <!-- Heroicon name: outline/heart -->
                  <svg
                    class="h-6 w-6 flex-shrink-0"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span class="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="border-t divide-y divide-gray-200" *ngFor="let item of product.specification; let i = index">
                <div>
                  <h3>
                    <!-- Expand/collapse question button -->
                    <button
                      type="button"
                      class="group relative w-full py-6 flex justify-between items-center text-left focus:outline-none"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                      (click)="item.show = !item.show"
                    >
                      <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                      <span class="text-gray-900 dark:text-white text-sm font-medium"> {{ item.title }} </span>
                      <span class="ml-6 flex items-center">
                        <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                        <svg
                          *ngIf="!item.show"
                          class="h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-white"
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <svg
                          *ngIf="item.show"
                          class="h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pb-6 prose prose-sm" *ngIf="item.show">
                    <ul role="list">
                      <li *ngFor="let des of item.specification_description" class="dark:text-white">
                        {{ des.description }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- More sections... -->
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductOverviewsComponent {
  @Input() product: any
  public tabTile: string = 'Customer Reviews'
  public colorActive: string
  public checkSize: string
  public coverImg: string = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
  selectedImages: any
  selectRing: string

  colorCheck(color: string): string {
    if (this.colorActive) {
      return 'bg-' + color + '-600' + ' ' + 'border-' + color + '-900' + ' ' + 'border border-opacity-10 rounded-full'
    }
    return 'bg-' + color + '-600'
  }

  changeSize(size: string): void {
    this.checkSize = size
  }

  changeColor(color): void {
    if (color.images) {
      this.selectedImages = color.images
      this.selectRing = color.values
      this.coverImage(this.selectedImages[0].image)
    } else {
      this.selectRing = undefined
      this.selectedImages = undefined
      this.coverImage(color[0].image)
    }
  }
  coverImage(val) {
    this.coverImg = val
  }
}
