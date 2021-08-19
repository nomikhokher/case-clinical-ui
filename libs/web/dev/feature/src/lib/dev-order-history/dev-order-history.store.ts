import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Inputs, OrderHistory } from './model'

export interface Item {
  orderHistory?: OrderHistory[]
}

interface DevOrderHistoryState {
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
export class DevOrderHistoryStore extends ComponentStore<DevOrderHistoryState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Order History',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/order-history/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Order History', path: '/dev/order/history' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-accordion/dev-order-history.component.ts',
        },
        items: {
          orderHistory: [
            {
              number: 'WU88191111',
              date: 'January 22, 2021',
              datetime: '2021-01-22',
              href: '#',
              invoiceHref: '#',
              total: '$302.00',
              products: [
                {
                  id: 1,
                  name: 'Nomad Tumbler',
                  description:
                    "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
                  href: '#',
                  price: '$35.00',
                  status: 'out-for-delivery',
                  date: 'January 5, 2021',
                  datetime: '2021-01-05',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
                  imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
              ],
            },
            {
              number: 'WU88191111',
              date: 'January 22, 2021',
              datetime: '2021-01-22',
              href: '#',
              invoiceHref: '#',
              total: '$302.00',
              products: [
                {
                  id: 1,
                  name: 'Nomad Tumbler',
                  description:
                    "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
                  href: '#',
                  price: '$35.00',
                  status: 'out-for-delivery',
                  date: 'January 5, 2021',
                  datetime: '2021-01-05',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
                  imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
                },
                // More products...
              ],
            },
            // More orders...
          ],
        },
        component_inputs: [
          {
            label: 'OrderHistory',
            prop: '[orderHistory]',
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
