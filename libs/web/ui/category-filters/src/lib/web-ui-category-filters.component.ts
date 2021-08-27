import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-category-filters',
  template: `
    <div class="bg-white dark:bg-gray-800">
      <div>
        <!--
          Mobile filter dialog

          Off-canvas menu for mobile, show/hide based on off-canvas menu state.
        -->
        <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
          <!--
            Off-canvas menu overlay, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

          <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
          <div
            class="ml-auto relative max-w-xs w-full h-full bg-white dark:bg-gray-800 shadow-xl py-4 pb-6 flex flex-col overflow-y-auto"
          >
            <div class="px-4 flex items-center justify-between">
              <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h2>
              <button
                type="button"
                class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500"
              >
                <span class="sr-only">Close menu</span>
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
            </div>

            <!-- Filters -->
            <form class="mt-4">
              <div class="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                  <legend class="w-full px-2">
                    <!-- Expand/collapse section button -->
                    <button
                      type="button"
                      class="w-full p-2 flex items-center justify-between text-gray-400 dark:text-gray-200 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <span class="text-sm font-medium text-gray-900 dark:text-gray-100"> Color </span>
                      <span class="ml-6 h-7 flex items-center">
                        <!--
                          Expand/collapse icon, toggle classes based on section open state.

                          Heroicon name: solid/chevron-down

                          Open: "-rotate-180", Closed: "rotate-0"
                        -->
                        <svg
                          class="rotate-0 h-5 w-5 transform"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </legend>
                  <div class="pt-4 pb-2 px-4" id="filter-section-0">
                    <div class="space-y-6">
                      <div class="flex items-center" *ngFor="let color of colors; let i = index">
                        <input
                          name="color"
                          value="white"
                          type="checkbox"
                          [checked]="selectedColor === i"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          (click)="filterProduct($event, color.id, 1); selectedColor = i"
                        />
                        <label for="color-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                          {{ color.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                  <legend class="w-full px-2">
                    <!-- Expand/collapse section button -->
                    <button
                      type="button"
                      class="w-full p-2 flex items-center justify-between text-gray-400 dark:text-gray-200 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span class="text-sm font-medium text-gray-900 dark:text-gray-100"> Category </span>
                      <span class="ml-6 h-7 flex items-center">
                        <!--
                          Expand/collapse icon, toggle classes based on section open state.

                          Heroicon name: solid/chevron-down

                          Open: "-rotate-180", Closed: "rotate-0"
                        -->
                        <svg
                          class="rotate-0 h-5 w-5 transform"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </legend>
                  <div class="pt-4 pb-2 px-4" id="filter-section-1">
                    <div class="space-y-6">
                      <div class="flex items-center" *ngFor="let category of categories; let i = index">
                        <input
                          name="category"
                          value="new-arrivals"
                          type="checkbox"
                          [checked]="selectedCategory === i"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          (click)="filterProduct($event, category.id, 2); selectedCategory = i"
                        />
                        <label for="category-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                          {{ category.title }}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                  <legend class="w-full px-2">
                    <!-- Expand/collapse section button -->
                    <button
                      type="button"
                      class="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span class="text-sm font-medium text-gray-900 dark:text-gray-100"> Sizes </span>
                      <span class="ml-6 h-7 flex items-center">
                        <!--
                          Expand/collapse icon, toggle classes based on section open state.

                          Heroicon name: solid/chevron-down

                          Open: "-rotate-180", Closed: "rotate-0"
                        -->
                        <svg
                          class="rotate-0 h-5 w-5 transform"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </legend>
                  <div class="pt-4 pb-2 px-4" id="filter-section-2">
                    <div class="space-y-6">
                      <div class="flex items-center" *ngFor="let size of sizes; let i = index">
                        <input
                          name="sizes"
                          value="xs"
                          type="checkbox"
                          [checked]="selectedSize === i"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          (click)="filterProduct($event, size.id, 3); selectedSize = i"
                        />
                        <label for="sizes-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                          {{ size.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </div>

        <main class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="border-b border-gray-200 pb-10">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">{{ sectionTitle }}</h1>
            <p class="mt-4 text-base text-gray-500 dark:text-gray-300">
              {{ description }}
            </p>
          </div>

          <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 class="sr-only">Filters</h2>

              <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
              <button type="button" class="inline-flex items-center lg:hidden">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-400">Filters</span>
                <!-- Heroicon name: solid/plus-sm -->
                <svg
                  class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div class="hidden lg:block">
                <form class="divide-y divide-gray-200 space-y-10">
                  <div>
                    <fieldset>
                      <legend class="block text-sm font-medium text-gray-900 dark:text-gray-100">Color</legend>
                      <div class="pt-6 space-y-3">
                        <div class="flex items-center" *ngFor="let color of colors; let i = index">
                          <input
                            name="color"
                            value="white"
                            type="checkbox"
                            [checked]="selectedColor === i"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            (click)="filterProduct($event, color.id, 1); selectedColor = i"
                          />
                          <label for="color-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            {{ color.name }}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="pt-10">
                    <fieldset>
                      <legend class="block text-sm font-medium text-gray-900 dark:text-gray-100">Category</legend>
                      <div class="pt-6 space-y-3">
                        <div class="flex items-center" *ngFor="let category of categories; let i = index">
                          <input
                            name="category"
                            value="new-arrivals"
                            type="checkbox"
                            [checked]="selectedCategory === i"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            (click)="filterProduct($event, category.id, 2); selectedCategory = i"
                          />
                          <label for="category-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            {{ category.title }}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="pt-10">
                    <fieldset>
                      <legend class="block text-sm font-medium text-gray-900 dark:text-gray-100">Sizes</legend>
                      <div class="pt-6 space-y-3">
                        <div class="flex items-center" *ngFor="let size of sizes; let i = index">
                          <input
                            name="sizes"
                            type="checkbox"
                            [checked]="selectedSize === i"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            (click)="filterProduct($event, size.id, 3); selectedSize = i"
                          />
                          <label for="sizes-0" class="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            {{ size.name }}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </aside>

            <!-- Product grid -->
            <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
              <!-- Replace with your content -->
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                <ui-product-list [products]="productItems"></ui-product-list>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class WebUiCategoryFiltersComponent {
  @Input() sectionTitle?: String
  @Input() description?: String
  @Input() products?: Product[]
  @Input() categories?: Category[]
  @Input() colors?: Color[]
  @Input() sizes?: Size[]

  selectedColor = -1
  selectedCategory = -1
  selectedSize = -1

  productItems: any

  ngOnInit(): void {
    this.productItems = this.getProducts()
  }

  // get all products or filtered products from the array of product
  getProducts(id?, filterBy?) {
    return this.products.filter((product) => {
      if (filterBy) {
        // filter product by color
        if (filterBy == 1 && product.color_id == id) {
          product.color = this.getColor(product.color_id)
          this.productItems = null
          return product
        }

        // filter product by category
        if (filterBy == 2 && product.category_id == id) {
          product.color = this.getColor(product.color_id)
          this.productItems = null
          return product
        }

        // filter product by size
        if (filterBy == 3 && product.size_id == id) {
          product.color = this.getColor(product.color_id)
          this.productItems = null
          return product
        }
      } else {
        product.color = this.getColor(product.color_id)
        return product
      }
    })
  }

  // get specific color by color_id
  getColor(colorId) {
    return this.colors
      .map((color) => {
        if (color.id === colorId) return color.name
        return
      })
      .join('')
  }

  // filter here products by color, category and size
  filterProduct(e, id, filterBy) {
    if (e.target.checked) this.productItems = this.getProducts(id, filterBy)
    else this.productItems = this.getProducts()
  }
}

interface Product {
  id?: number
  title?: string
  image?: string
  price?: number
  category_id?: number
  color_id?: number
  size_id?: number
  color?: any
}

interface Color {
  id?: number
  name?: string
}

interface Category {
  id?: number
  title?: string
}

interface Size {
  id?: number
  name?: string
}
