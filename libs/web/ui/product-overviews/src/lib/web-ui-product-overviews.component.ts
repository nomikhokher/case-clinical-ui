import { Component } from '@angular/core'

@Component({
  selector: 'ui-product-overviews',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <div class="bg-white">
          <div class="pt-6 pb-16 sm:pb-24">
            <nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ol role="list" class="flex items-center space-x-4">
                <li>
                  <div class="flex items-center">
                    <a href="#" class="mr-4 text-sm font-medium text-gray-900"> Women </a>
                    <svg
                      viewBox="0 0 6 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="h-5 w-auto text-gray-300"
                    >
                      <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                    </svg>
                  </div>
                </li>

                <li>
                  <div class="flex items-center">
                    <a href="#" class="mr-4 text-sm font-medium text-gray-900"> Clothing </a>
                    <svg
                      viewBox="0 0 6 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="h-5 w-auto text-gray-300"
                    >
                      <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                    </svg>
                  </div>
                </li>

                <li class="text-sm">
                  <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> Basic Tee </a>
                </li>
              </ol>
            </nav>
            <div class="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                <div class="lg:col-start-8 lg:col-span-5">
                  <div class="flex justify-between">
                    <h1 class="text-xl font-medium text-gray-900">{{ product.title }}</h1>
                    <p class="text-xl font-medium text-gray-900">{{ '$' }}{{ product.price }}</p>
                  </div>
                  <!-- Reviews -->
                  <div class="mt-4">
                    <h2 class="sr-only">Reviews</h2>
                    <div class="flex items-center">
                      <p class="text-sm text-gray-700">
                        {{ product.reviews.total_rating }}
                        <span class="sr-only"> out of 5 stars</span>
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

                        <!-- Heroicon name: solid/star -->
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

                        <!-- Heroicon name: solid/star -->
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

                        <!-- Heroicon name: solid/star -->
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

                        <!-- Heroicon name: solid/star -->
                        <svg
                          class="text-gray-200 h-5 w-5 flex-shrink-0"
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
                          >See all {{ product.reviews.reviews }} reviews</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Image gallery -->
                <ng-container *ngIf="!colorActive">
                  <ng-container *ngIf="product.images">
                    <div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                      <h2 class="sr-only">Images</h2>

                      <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                        <ng-container *ngFor="let image of product.images">
                          <ng-container *ngIf="image.is_active">
                            <img
                              src="{{ image.image }}"
                              alt="Back of women&#039;s Basic Tee in black."
                              class="lg:col-span-2 lg:row-span-2 rounded-lg"
                            />
                          </ng-container>
                          <ng-container *ngIf="!image.is_active">
                            <img
                              src="{{ image.image }}"
                              alt="Side profile of women&#039;s Basic Tee in black."
                              class="hidden lg:block rounded-lg"
                            />
                          </ng-container>
                        </ng-container>
                      </div>
                    </div>
                  </ng-container>
                </ng-container>

                <ng-container *ngIf="colorActive">
                  <ng-container *ngFor="let variant of product.variants">
                    <ng-container *ngIf="variant">
                      <div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                        <h2 class="sr-only">Images</h2>

                        <ng-container *ngFor="let color of variant.color">
                          <ng-container *ngIf="color.values === colorActive">
                            <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                              <ng-container *ngFor="let image of color.images">
                                <ng-container *ngIf="image.is_active">
                                  <img
                                    src="{{ image.image }}"
                                    alt="Back of women&#039;s Basic Tee in black."
                                    class="lg:col-span-2 lg:row-span-2 rounded-lg"
                                  />
                                </ng-container>
                                <ng-container *ngIf="!image.is_active">
                                  <img
                                    src="{{ image.image }}"
                                    alt="Side profile of women&#039;s Basic Tee in black."
                                    class="hidden lg:block rounded-lg"
                                  />
                                </ng-container>
                              </ng-container>
                            </div>
                          </ng-container>
                        </ng-container>
                      </div>
                    </ng-container>
                  </ng-container>
                </ng-container>

                <div class="mt-8 lg:col-span-5">
                  <ng-container *ngFor="let variant of product.variants">
                    <form>
                      <ng-container *ngIf="variant.color">
                        <div>
                          <h2 class="text-sm font-medium text-gray-900">Color</h2>

                          <fieldset class="mt-2">
                            <legend class="sr-only">Choose a color</legend>
                            <div class="flex items-center space-x-3">
                              <!--
                                Active and Checked: "ring ring-offset-1"
                                Not Active and Checked: "ring-2"
                              -->
                              <ng-container *ngFor="let color of variant.color">
                                <label
                                  class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                  [ngClass]="
                                    color.values == colorActive &&
                                    'ring ring-offset-1' + ' ' + 'ring-' + colorActive + '-800'
                                  "
                                >
                                  <input
                                    type="radio"
                                    name="color-choice"
                                    value="Black"
                                    class="sr-only"
                                    aria-labelledby="color-choice-0-label"
                                    (click)="changeColor(color.values)"
                                  />
                                  <span
                                    aria-hidden="true"
                                    class="h-8 w-8 rounded-full"
                                    [ngClass]="color.values && colorCheck(color.values)"
                                  ></span>
                                </label>
                              </ng-container>
                            </div>
                          </fieldset>
                        </div>
                      </ng-container>
                      <ng-container *ngIf="variant.size">
                        <!-- Size picker -->
                        <div class="mt-8">
                          <div class="flex items-center justify-between">
                            <h2 class="text-sm font-medium text-gray-900">Size</h2>
                            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >See sizing chart</a
                            >
                          </div>

                          <fieldset class="mt-2">
                            <legend class="sr-only">Choose a size</legend>
                            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                              <!--
                                In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                                Active: "ring-2 ring-offset-2 ring-indigo-500"
                                Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                              -->
                              <ng-container *ngFor="let size of variant.size">
                                <label
                                  class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                                  [ngClass]="
                                    size.values == checkSize &&
                                    'text-white ring ring-offset-1 ring-indigo-600 bg-indigo-600'
                                  "
                                >
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XXS"
                                    class="sr-only"
                                    aria-labelledby="size-choice-0-label"
                                    (click)="changeSize(size.values)"
                                  />
                                  <p id="size-choice-0-label">{{ size.values }}</p>
                                </label>
                              </ng-container>
                            </div>
                          </fieldset>
                        </div>
                      </ng-container>

                      <button
                        type="submit"
                        class="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add to cart
                      </button>
                    </form>
                  </ng-container>
                  <!-- Product details -->
                  <div class="mt-10">
                    <h2 class="text-sm font-medium text-gray-900">Description</h2>

                    <div class="mt-4 prose prose-sm text-gray-500">
                      <p>
                        {{ product.description }}
                      </p>
                    </div>
                  </div>

                  <ng-container *ngFor="let item of product.specification">
                    <ng-container *ngIf="item.title === 'Care'">
                      <div class="mt-8 border-t border-gray-200 pt-8">
                        <h2 class="text-sm font-medium text-gray-900">{{ item.title }}</h2>

                        <div class="mt-4 prose prose-sm text-gray-500">
                          <ul role="list">
                            <ng-container *ngFor="let specificationDescription of item.specification_description">
                              <li>{{ specificationDescription.description }}</li>
                            </ng-container>
                          </ul>
                        </div>
                      </div>
                    </ng-container>
                    <!-- Policies -->
                    <ng-container *ngIf="item.title === 'Shipping'">
                      <section aria-labelledby="policies-heading" class="mt-10">
                        <h2 id="policies-heading" class="sr-only">Our Policies</h2>
                        <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                          <ng-container *ngFor="let specificationDescription of item.specification_description">
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                              <dt>
                                <!-- Heroicon name: outline/globe -->
                                <svg
                                  class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
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
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span class="mt-4 text-sm font-medium text-gray-900">
                                  {{ specificationDescription.description }}
                                </span>
                              </dt>
                              <dd class="mt-1 text-sm text-gray-500">Get your order in 2 years</dd>
                            </div>
                          </ng-container>
                        </dl>
                      </section>
                    </ng-container>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductOverviewsComponent {
  public colorActive: string
  public checkSize: string

  product: any = {
    title: 'Basic Tee',
    description: `'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-			shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn 			locally, with a special dye technique that gives each tee it's own look.'`,
    category: {
      title: 'Shirt',
    },
    price: 35,
    is_active: true,
    reviews: {
      total_rating: 3.5,
      reviews: 515,
    },
    variants: [
      {
        color: [
          {
            values: 'gray',
            images: [
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505001381alt1_3.jpg',
                is_active: true,
              },
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505001382alt2_3.jpg',
                is_active: false,
              },
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505001383alt3_4.jpg',
                is_active: false,
              },
            ],
          },
          {
            values: 'yellow',
            images: [
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505003311alt1_3.jpg',
                is_active: true,
              },
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505003312alt2_3.jpg',
                is_active: false,
              },
              {
                name: '',
                image: 'https://www.bellacanvas.com/bella/product/hires/7505003313alt3_4.jpg',
                is_active: false,
              },
            ],
          },
        ],

        size: [{ values: 'xxs' }, { values: 'xs' }, { values: 'm' }],
      },
    ],
    specification: [
      {
        title: 'Care',
        specification_description: [
          { description: 'Spot clean as needed' },
          { description: 'Hand wash with mild soap' },
        ],
      },
      {
        title: 'Shipping',
        specification_description: [
          { description: 'Free shipping on orders over $300' },
          { description: 'nternational shipping available' },
        ],
      },
    ],
    images: [
      {
        name: '',
        image: 'https://www.bellacanvas.com/bella/product/hires/7505003451alt1_3.jpg',
        is_active: true,
      },
      {
        name: '',
        image: 'https://www.bellacanvas.com/bella/product/hires/7505003452alt2_3.jpg',
        is_active: false,
      },
      {
        name: '',
        image: 'https://www.bellacanvas.com/bella/product/hires/7505003453alt3_4.jpg',
        is_active: false,
      },
    ],
    faqs: [
      {
        question: 'What format are these icons?',
        answer:
          'The icons are in SVG (Scalable Vector Graphic) format. They can 					be imported into your design tool of choice and used directly in 					code.',
      },
      {
        question: 'What format are these icons?',
        answer:
          'The icons are in SVG (Scalable Vector Graphic) format. They can 					be imported into your design tool of choice and used directly in 					code.',
      },
    ],
    license: [
      {
        heading: 'Overview',
        description: 'What format are these icons',
        license_detail: [
          { detail: `'You're allowed to use the icons in unlimited projects.'` },
          { detail: `'You're allowed to use the icons in unlimited projects.'` },
        ],
      },
      {
        question: 'What format are these icons?',
        answer:
          'The icons are in SVG (Scalable Vector Graphic) format. They can 					be imported into your design tool of choice and used directly in 					code.',
      },
    ],
  }

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
    this.colorActive = color
  }
}
