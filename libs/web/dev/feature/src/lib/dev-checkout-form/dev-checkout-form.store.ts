import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Products, OrderAttributes, Input as Inputs } from './model'

export interface Item {
  products: Products[]
  orderAttributes: OrderAttributes[]
}

interface DevCheckoutFormState {
  config?: Config
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData?: PreviewData
  items?: Item
  loading?: boolean
  component_inputs?: Inputs[]
  component_outputs?: Inputs[]
}

@Injectable()
export class DevCheckoutFormStore extends ComponentStore<DevCheckoutFormState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Checkout Forms',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/checkout-form/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Checkout Forms', path: '/dev/checkout/form' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-checkout-form/dev-checkout-forms.component.ts',
        },
        items: {
          products: [
            {
              id: 1,
              name: 'Mountain Mist Artwork Tee',
              href: '#',
              price: '36.00',
              color: 'Birch',
              size: 'L',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
              qty: 1,
            },
            {
              id: 2,
              name: 'Mountain Mist Artwork Tee',
              href: '#',
              price: '36.00',
              color: 'Birch',
              size: 'L',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg',
              imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
              qty: 2,
            },
            // More products...
          ],
          orderAttributes: [
            {
              id: 1,
              label: 'Taxes',
              value: '9.92',
            },
            {
              id: 2,
              label: 'Shipping',
              value: '8.00',
            },
            {
              id: 3,
              label: 'Discount',
              value: '16.00',
              code: 'CHEAPSKATE',
            },
          ],
        },
        component_inputs: [
          {
            label: 'Products',
            prop: '[products]',
            description: `Shopping cart software is a piece of e-commerce software on a web server that allows visitors to have an Internet site to select items for eventual purchase. The software allows online shopping customers to accumulate a list of items for purchase.`,
            dataType: 'Array',
            typeArray: [
              [
                { name: 'Mountain Mist Artwork Tee' },
                { href: '#' },
                { price: '36.00' },
                { color: 'Birch' },
                { size: 'L' },
                { imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg' },
                {
                  imageAlt:
                    'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
                },
                { qty: 1 },
              ],
              [
                { name: 'Mountain Mist Artwork Tee' },
                { href: '#' },
                { price: '36.00' },
                { color: 'Birch' },
                { size: 'L' },
                { imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg' },
                {
                  imageAlt:
                    'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
                },
                { qty: 2 },
              ],
            ],
          },
          {
            label: 'OrderAttributes',
            prop: '[orderAttributes]',
            description:
              'An e-commerce invoice is used to confirm an e-commerce transaction and provide a detailed order confirmation to customers. That said, some business-to-business merchants may offer credit—the order will be placed first and the invoice will be sent later to ask for payment.',
            dataType: 'Array',
            typeArray: [
              [{ label: 'Taxes' }, { value: '9.92' }],
              [{ label: 'Shipping' }, { value: '8.00' }],
              [{ label: 'Discount' }, { value: '16.00' }, { code: 'CHEAPSKATE' }],
            ],
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
