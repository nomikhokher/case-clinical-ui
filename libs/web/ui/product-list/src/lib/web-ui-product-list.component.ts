import { Component } from '@angular/core'

@Component({
  selector: 'ui-product-list',
  template: `
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative" *ngFor="let product of products">
            <div
              class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
            >
              <img
                src="{{ product.image }}"
                alt="Front of men's Basic Tee in {{ color }}."
                class="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="javascript:void(0)">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ '$' }}{{ product.price }}</p>
            </div>
          </div>

          <!-- More products... -->
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductListComponent {
  products: Products[] = [
    {
      title: 'Basic Tee',
      price: 35,
      color: 'Black',
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    },
    {
      title: 'Basic Tee',
      price: 35,
      color: 'White',
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    },
    {
      title: 'Basic Tee',
      price: 35,
      color: 'Charcoal',
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    },
    {
      title: 'Basic Tee',
      price: 35,
      color: 'ISO Dot',
      image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    },
  ]
}

interface Products {
  title: string
  price: number
  color: string
  image: string
}
