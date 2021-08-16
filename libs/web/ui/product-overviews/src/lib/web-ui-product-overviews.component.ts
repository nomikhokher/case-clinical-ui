import { Component } from '@angular/core'

@Component({
  selector: 'ui-product-overviews',
  template: `
    <div class="bg-white">
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
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ product.title }}</h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">{{ '$' }}{{ product.price }}</p>
            </div>

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
                </div>
                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
                <div class="ml-4 flex">
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >See all {{ product.reviews.reviews }} reviews</a
                  >
                </div>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div class="text-base text-gray-700 space-y-6">
                <p>
                  {{ product.description }}
                </p>
              </div>
            </div>

            <form class="mt-6" *ngFor="let item of product.variants">
              <!-- Colors -->
              <div>
                <h3 class="text-sm text-gray-600">Color</h3>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">
                    <label
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                      [ngClass]="{ 'ring-2 ring-gray-600': selectRing == undefined }"
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
                    <!--
                          Active and Checked: "ring ring-offset-1"
                          Not Active and Checked: "ring-2"
                        -->
                    <label
                      *ngFor="let color of item.color"
                      class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700"
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
                        class="h-8 w-8 bg-{{ color.values }}-700 border border-black border-opacity-10 rounded-full"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">See sizing chart</a>
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
                      class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
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
                  class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
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
                      <span class="text-gray-900 text-sm font-medium"> {{ item.title }} </span>
                      <span class="ml-6 flex items-center">
                        <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                        <svg
                          *ngIf="!item.show"
                          class="h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                        <!--
                      Heroicon name: outline/minus-sm

                      Open: "block", Closed: "hidden"
                    -->
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
                      <li *ngFor="let des of item.specification_description">{{ des.description }}</li>
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
  public colorActive: string
  public checkSize: string
  public coverImg: string = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
  selectedImages: any
  selectRing: string

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
        show: false,
        specification_description: [
          { description: 'Spot clean as needed' },
          { description: 'Hand wash with mild soap' },
        ],
      },
      {
        title: 'Shipping',
        show: false,
        specification_description: [
          { description: 'Free shipping on orders over $300' },
          { description: 'nternational shipping available' },
        ],
      },
    ],
    images: [
      {
        name: '',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
        is_active: true,
      },
      {
        name: '',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg',
        is_active: false,
      },
      {
        name: '',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
        is_active: false,
      },
    ],
    faqs: [
      {
        question: 'What format are these icons?',
        answer:
          'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
      },
      {
        question: 'What format are these icons?',
        answer:
          'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in	code.',
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
          'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in   code.',
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
    if (color.images) {
      this.selectedImages = color.images

      this.selectRing = color.values
      console.log(this.selectRing)
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
