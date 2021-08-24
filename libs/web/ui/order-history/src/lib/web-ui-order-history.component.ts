import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-order-history',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="bg-white dark:bg-gray-700">
          <div class="max-w-4xl mx-auto py-16 sm:px-6 sm:py-24">
            <div class="px-4 sm:px-0">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                Order history
              </h1>
              <p class="mt-2 text-sm text-gray-500 dark:text-white">
                Check the status of recent orders, manage returns, and download invoices.
              </p>
            </div>

            <div class="mt-16" *ngFor="let order of orders">
              <h2 class="sr-only">Recent orders</h2>

              <div class="space-y-16 sm:space-y-24">
                <div>
                  <h3 class="sr-only">Order placed on <time datetime="2021-01-22">January 22, 2021</time></h3>

                  <div
                    class="bg-gray-50 dark:bg-gray-500 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8"
                  >
                    <dl
                      class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 dark:text-white flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8"
                    >
                      <div class="flex justify-between md:block">
                        <dt class="font-medium text-gray-900 dark:text-white">Order number</dt>
                        <dd class="md:mt-1">{{ order.number }}</dd>
                      </div>
                      <div class="flex justify-between pt-4 md:block md:pt-0">
                        <dt class="font-medium text-gray-900 dark:text-white">Date placed</dt>
                        <dd class="md:mt-1">
                          <time datetime="2021-01-22">{{ order.date }}</time>
                        </dd>
                      </div>
                      <div class="flex justify-between pt-4 font-medium text-gray-900 dark:text-white md:block md:pt-0">
                        <dt>Total amount</dt>
                        <dd class="md:mt-1">{{ order.total }}</dd>
                      </div>
                    </dl>
                    <div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                      >
                        View Order
                        <span class="sr-only">WU88191111</span>
                      </a>
                      <a
                        href="#"
                        class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                      >
                        View Invoice
                        <span class="sr-only">for order WU88191111</span>
                      </a>
                    </div>
                  </div>

                  <div class="mt-6 flow-root px-4 sm:mt-10 sm:px-0" *ngFor="let product of order.products">
                    <div class="-my-6 divide-y divide-gray-200 sm:-my-10">
                      <div class="flex py-6 sm:py-10">
                        <div class="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div class="lg:flex-1">
                            <div class="sm:flex">
                              <div>
                                <h4 class="font-medium text-gray-900 dark:text-white">{{ product.name }}</h4>
                                <p class="hidden mt-2 text-sm text-gray-500 dark:text-white sm:block">
                                  {{ product.description }}
                                </p>
                              </div>
                              <p class="mt-1 font-medium text-gray-900 dark:text-white sm:mt-0 sm:ml-6">
                                {{ product.price }}
                              </p>
                            </div>
                            <div class="mt-2 flex text-sm font-medium sm:mt-4">
                              <a href="#" class="text-indigo-600 hover:text-indigo-500">View Product</a>
                              <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                                <a href="#" class="text-indigo-600 hover:text-indigo-500">Buy Again</a>
                              </div>
                            </div>
                          </div>
                          <div class="mt-6 font-medium">
                            <p class="dark:text-white">Out for delivery</p>
                          </div>
                        </div>
                        <div class="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                          <img
                            src="{{ product.imageSrc }}"
                            alt="{{ product.imageAlt }}"
                            class="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                          />
                        </div>
                      </div>

                      <!-- More products... -->
                    </div>
                  </div>
                </div>

                <!-- More orders... -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiOrderHistoryComponent {
  @Input() orders: OrderHistory['products']
}

interface OrderHistory {
  number: string
  date: string
  datetime: string
  href: string
  invoiceHref: string
  total: string
  products: Array<Products>
}

type Products = {
  id: number
  name: string
  description: string
  href: string
  price: string
  status: string
  date: string
  datetime: string
  imageSrc: string
  imageAlt: string
}
