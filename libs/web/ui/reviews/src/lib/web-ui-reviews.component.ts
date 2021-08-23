import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-reviews',
  template: `
    <div class="bg-white dark:bg-gray-800">
      <div
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8"
      >
        <div class="lg:col-span-4">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">Customer Reviews</h2>

          <div class="mt-3 flex items-center">
            <div>
              <div class="flex items-center">
                <!--
              Heroicon name: solid/star

              Active: "text-yellow-400", Default: "text-gray-300"
            -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-yellow-400"
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
                  class="flex-shrink-0 h-5 w-5 text-yellow-400"
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
                  class="flex-shrink-0 h-5 w-5 text-yellow-400"
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
                  class="flex-shrink-0 h-5 w-5 text-yellow-400"
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
                  class="flex-shrink-0 h-5 w-5 text-gray-300"
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
              <p class="sr-only">4 out of 5 stars</p>
            </div>
            <p class="ml-2 text-sm text-gray-900 dark:text-gray-200">Based on {{ totalReviews() }} reviews</p>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Review data</h3>

            <dl class="space-y-3">
              <div class="flex items-center text-sm">
                <dt class="flex-1 flex items-center">
                  <p class="w-3 font-medium text-gray-900 dark:text-gray-200">
                    5<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <div class="ml-3 relative flex-1">
                      <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                      <div
                        style="width: calc({{ reviews.fiveStar }} / {{ totalReviews() }} * 100%);"
                        class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-200">
                  {{ reviewPercentage(reviews.fiveStar) }}{{ '%' }}
                </dd>
              </div>

              <div class="flex items-center text-sm">
                <dt class="flex-1 flex items-center">
                  <p class="w-3 font-medium text-gray-900 dark:text-gray-200">
                    4<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <div class="ml-3 relative flex-1">
                      <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                      <div
                        style="width: calc({{ reviews.fourStar }} / {{ totalReviews() }} * 100%);"
                        class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-200">
                  {{ reviewPercentage(reviews.fourStar) }}{{ '%' }}
                </dd>
              </div>

              <div class="flex items-center text-sm">
                <dt class="flex-1 flex items-center">
                  <p class="w-3 font-medium text-gray-900 dark:text-gray-200">
                    3<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <div class="ml-3 relative flex-1">
                      <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                      <div
                        style="width: calc({{ reviews.threeStar }} / {{ totalReviews() }} * 100%);"
                        class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-200">
                  {{ reviewPercentage(reviews.threeStar) }}{{ '%' }}
                </dd>
              </div>

              <div class="flex items-center text-sm">
                <dt class="flex-1 flex items-center">
                  <p class="w-3 font-medium text-gray-900 dark:text-gray-200">
                    2<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <div class="ml-3 relative flex-1">
                      <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                      <div
                        style="width: calc({{ reviews.twoStar }} / {{ totalReviews() }} * 100%);"
                        class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-200">
                  {{ reviewPercentage(reviews.twoStar) }}{{ '%' }}
                </dd>
              </div>

              <div class="flex items-center text-sm">
                <dt class="flex-1 flex items-center">
                  <p class="w-3 font-medium text-gray-900 dark:text-gray-200">
                    1<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <div class="ml-3 relative flex-1">
                      <div class="h-3 bg-gray-100 border border-gray-200 rounded-full"></div>

                      <div
                        style="width: calc({{ reviews.oneStar }} / {{ totalReviews() }} * 100%);"
                        class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-200">
                  {{ reviewPercentage(reviews.oneStar) }}{{ '%' }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200">Share your thoughts</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-200">
              If you’ve used this product, share your thoughts with other customers
            </p>

            <a
              href="#"
              class="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-200 dark:bg-gray-700 dark:border-transparent hover:opacity-75 sm:w-auto lg:w-full"
              >Write a review</a
            >
          </div>
        </div>

        <div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <h3 class="sr-only">Recent reviews</h3>

          <div class="flow-root">
            <div class="-my-12 divide-y divide-gray-200">
              <div class="py-12" *ngFor="let customer of customers">
                <div class="flex items-center">
                  <img src="{{ customer.img }}" alt="Emily Selman." class="h-12 w-12 rounded-full" />
                  <div class="ml-4">
                    <h4 class="text-sm font-bold text-gray-900 dark:text-gray-200">{{ customer.name }}</h4>
                    <div class="mt-1 flex items-center">
                      <svg
                        *ngFor="let item of [1, 2, 3, 4, 5]; let i = index"
                        [ngClass]="customer.review > i ? 'text-yellow-400' : 'text-gray-300'"
                        class="h-5 w-5 flex-shrink-0"
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
                    <p class="sr-only">5 out of 5 stars</p>
                  </div>
                </div>

                <div class="mt-4 space-y-6 text-base italic text-gray-600 dark:text-gray-100">
                  <p>{{ customer.comment }}</p>
                </div>
              </div>

              <!-- More reviews... -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiReviewsComponent {
  @Input() customers
  @Input() reviews
  totalReviews() {
    return (
      Number(this.reviews.fiveStar) +
      Number(this.reviews.fourStar) +
      Number(this.reviews.threeStar) +
      Number(this.reviews.twoStar) +
      Number(this.reviews.oneStar)
    )
  }
  reviewPercentage(count) {
    return ((Number(count) / this.totalReviews()) * 100).toFixed(2)
  }
}
