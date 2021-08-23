import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Inputs, ShoppingCart, OrderAttribute } from './model'

export interface Item {
  products?: ShoppingCart[]
  orderAttribute?: OrderAttribute[]
}

interface DevShoppingCartState {
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
export class DevShoppingCartStore extends ComponentStore<DevShoppingCartState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Shopping Cart',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/shopping-cart/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Shopping Cart', path: '/dev/shopping/cart' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-accordion/dev-shopping-cart.component.ts',
        },
        items: {
          orderAttribute: [
            {
              label: 'Shipping estimate',
              value: 5.0,
            },
            {
              label: 'Tax estimate',
              value: 8.0,
            },
          ],
          products: [
            {
              id: 1,
              name: 'Basic Tee',
              route: '#',
              price: 32.0,
              color: 'Sienna',
              inStock: true,
              size: 'Large',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
              imageAlt: "Front of men's Basic Tee in sienna.",
              qty: 1,
            },
            {
              id: 2,
              name: 'Basic Tee',
              route: '#',
              price: 32.0,
              color: 'Black',
              inStock: false,
              leadTime: '3–4 weeks',
              size: 'Large',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
              imageAlt: "Front of men's Basic Tee in black.",
              qty: 1,
            },
            {
              id: 3,
              name: 'Nomad Tumbler',
              route: '#',
              price: 35.0,
              color: 'White',
              inStock: true,
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
              imageAlt: 'Insulated bottle with white base and black snap lid.',
              qty: 1,
            },
          ],
        },
        component_inputs: [
          {
            label: 'Products',
            prop: '[products]',
            description:
              'Shopping cart software is a piece of e-commerce software on a web server that allows visitors to have an Internet site to select items for eventual purchase. The software allows online shopping customers to accumulate a list of items for purchase.',
            dataType: 'Array',
          },
          {
            label: 'OrderAttribute',
            prop: '[orderAttribute]',
            description:
              'Shopping cart software is a piece of e-commerce software on a web server that allows visitors to have an Internet site to select items for eventual purchase. The software allows online shopping customers to accumulate a list of items for purchase.',
            dataType: 'Array',
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
