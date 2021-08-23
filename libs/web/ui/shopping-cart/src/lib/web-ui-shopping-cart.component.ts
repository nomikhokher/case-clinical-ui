import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-shopping-cart',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <div class="bg-white">
          <div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
            <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section aria-labelledby="cart-heading" class="lg:col-span-7">
                <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

                <ul
                  role="list"
                  class="border-t border-b border-gray-200 divide-y divide-gray-200"
                  *ngFor="let product of products"
                >
                  <li class="flex py-6 sm:py-10">
                    <div class="flex-shrink-0">
                      <img
                        src="{{ product.imageSrc }}"
                        alt="{{ product.imageAlt }}"
                        class="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                      />
                    </div>

                    <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div class="flex justify-between">
                            <h3 class="text-sm">
                              <a href="#" class="font-medium text-gray-700 hover:text-gray-800"> {{ product.name }} </a>
                            </h3>
                          </div>
                          <div class="mt-1 flex text-sm">
                            <p class="text-gray-500">{{ product.color }}</p>

                            <p class="ml-4 pl-4 border-l border-gray-200 text-gray-500" *ngIf="product.size">
                              {{ product.size }}
                            </p>
                          </div>
                          <p class="mt-1 text-sm font-medium text-gray-900">
                            {{ formatCurrency(product.price) }}
                          </p>
                        </div>

                        <div class="mt-4 sm:mt-0 sm:pr-9">
                          <label for="quantity-0" class="sr-only">Quantity, Basic Tee</label>
                          <div class="flex flex-wrap">
                            <div class="flex w-8/12">
                              <input
                                type="text"
                                value="{{ product.qty }}"
                                class="bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                              />
                            </div>
                            <div class="flex flex-col w-4/12">
                              <button
                                type="button"
                                (click)="product.qty = product.qty + 1; subTotalPrice(); orderTotalPrice()"
                                class="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
                              >
                                +
                              </button>
                              <button
                                type="button"
                                (click)="product.qty = product.qty - 1; subTotalPrice(); orderTotalPrice()"
                                [disabled]="product.qty == 0 && true"
                                class="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
                              >
                                -
                              </button>
                            </div>
                          </div>
                          <div class="absolute top-0 right-0">
                            <button
                              type="button"
                              class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                              (click)="remeCartItem(product.id)"
                            >
                              <span class="sr-only">Remove</span>
                              <!-- Heroicon name: solid/x -->
                              <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                        <!-- Heroicon name: solid/check -->
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          *ngIf="product.inStock"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>In stock</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              <!-- Order summary -->
              <section
                aria-labelledby="summary-heading"
                class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

                <dl class="mt-6 space-y-4">
                  <div class="flex items-center justify-between">
                    <dt class="text-sm text-gray-600">Subtotal</dt>
                    <dd class="text-sm font-medium text-gray-900">{{ formatCurrency(totalPrice) }}</dd>
                  </div>
                  <ng-container *ngFor="let item of orderAttribute">
                    <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt class="flex text-sm text-gray-600">
                        <span>{{ item.label }}</span>
                        <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Learn more about how tax is calculated</span>
                          <!-- Heroicon name: solid/question-mark-circle -->
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </dt>
                      <dd class="text-sm font-medium text-gray-900">{{ '$' }}{{ item.value }}</dd>
                    </div>
                  </ng-container>
                  <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt class="text-base font-medium text-gray-900">Order total</dt>
                    <dd class="text-base font-medium text-gray-900">{{ '$' }}{{ orderTotalAttribute }}</dd>
                  </div>
                </dl>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiShoppingCartComponent {
  @Input() products?: ShoppingCart[]
  @Input() orderAttribute?: OrderAttribute[]
  totalPrice: number
  orderTotalAttribute: any

  ngOnInit(): void {
    this.subTotalPrice()
    this.orderTotalPrice()
  }

  formatCurrency = (num) => {
    return '$' + Number(num.toFixed(1)).toLocaleString() + ' '
  }

  remeCartItem(productId: number): void {
    this.products = this.products.filter((product: ShoppingCart) => product.id !== productId)
    this.subTotalPrice()
    this.orderTotalPrice()
  }

  subTotalPrice() {
    this.totalPrice = this.products.reduce((a, c: ShoppingCart) => a + c.price * c.qty, 0)
  }

  orderTotalPrice() {
    this.orderTotalAttribute = this.orderAttribute.reduce((a, c: OrderAttribute) => a + c.value, this.totalPrice)
  }
}

interface OrderAttribute {
  label: string
  value: number
}

type ShoppingCart = {
  id: number
  name: string
  route: string
  price: number
  color: string
  size?: string
  inStock?: boolean
  leadTime?: string
  imageSrc: string
  imageAlt: string
  qty: number
}
