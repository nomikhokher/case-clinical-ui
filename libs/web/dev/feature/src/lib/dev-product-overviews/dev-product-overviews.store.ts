import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Inputs, Product } from './model'

export interface Item {
  product: Product
}

interface DevProductOverviewsState {
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
export class DevProductOverviewsStore extends ComponentStore<DevProductOverviewsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Product Overviews',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-overviews/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Product Overviews', path: '/dev/product/overviews' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-product-overviews/dev-product-overviews.component.ts',
        },
        items: {
          product: {
            title: 'Basic Tee',
            description: `'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-			shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn 			locally, with a special dye technique that gives each tee it's own look.'`,
            category: {
              title: 'Shirt',
            },
            price: 35,
            is_active: true,
            review: {
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
            reviews_customer: [
              {
                id: 1,
                name: 'Hammad Hassan',
                url: 'https://www.pngarts.com/files/11/Avatar-Transparent-Background-PNG.png',
                rating: 5,
                comment: 'nice product in my life',
                created_at: 'July 12, 2021',
              },
              {
                id: 2,
                name: 'Maria Afzal',
                url: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
                rating: 3,
                comment: 'nice product in my life',
                created_at: 'July 27, 2021',
              },
            ],
            faqs: [
              {
                id: 1,
                question: 'What format are these icons?',
                answer:
                  'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
              },
              {
                id: 2,
                question: 'What format are these icons?',
                answer:
                  'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in	code.',
              },
            ],
            license: [
              {
                id: 1,
                heading: 'Overview',
                description: 'What format are these icons',
                license_detail: [
                  { detail: `'You're allowed to use the icons in unlimited projects.'` },
                  { detail: `'You're allowed to use the icons in unlimited projects.'` },
                ],
              },

              {
                id: 2,
                heading: 'Overview all products',
                license_detail: [
                  { detail: `'You're allowed to use the icons in unlimited projects.'` },
                  { detail: `'You're allowed to use the icons in unlimited projects.'` },
                ],
              },
            ],
          },
        },
        component_inputs: [
          {
            label: 'Product',
            prop: '[product]',
            description:
              'Shopping cart software is a piece of e-commerce software on a web server that allows visitors to have an Internet site to select items for eventual purchase. The software allows online shopping customers to accumulate a list of items for purchase.',
            dataType: 'Object',
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
