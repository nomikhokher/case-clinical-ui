import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-list',
  template: `
    <div class="bg-white dark:bg-gray-800">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">{{ sectionHeading }}</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative" *ngFor="let product of products">
            <ng-container *ngIf="product">
              <div
                class="w-full min-h-80 bg-gray-200 dark:bg-gray-600 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
              >
                <img
                  *ngIf="product.image"
                  src="{{ product.image }}"
                  alt="Front of men's Basic Tee in {{ color }}."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-400">
                    <a href="javascript:void(0)" *ngIf="product.title">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {{ product.title }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ product.color }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ '$' }}{{ product.price }}</p>
              </div>
            </ng-container>
          </div>
          <!-- More products... -->
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductListComponent {
  @Input() sectionHeading: String
  @Input() products: Products[]
}

interface Products {
  title: string
  price: number
  color: string
  image: string
}
