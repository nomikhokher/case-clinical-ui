import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevOrderSummariesState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Order Summaries',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/order-summaries/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Order Summaries', path: '/dev/order-summaries' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-order-summaries/dev-order-summaries.component.ts',
  items: {
    productOverview: {
      heading: 'Order Detail',
      orderNum: 'W086438695',
      date: 'March 22, 2021',
    },
    productDetail: [
      {
        id: 12,
        productName: 'Distant Mountains Artwork Tee',
        productPrice: '36.00',
        productDescription: `You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?`,
        productAdress: `Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8`,
        buyerEmail: 'testing@example.com',
        buyerPhone: '111-222-333',
        deliveryDate: 'March 24, 2021  ',
        deliveryStatusLevel: 4,
      },
    ],
    paymentDetails: {
      billingAdress: `Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8`,
      cardNumber: '4242q345234624',
      cardExpiry: '02 / 24',
      subTotal: 72,
      shippingCost: 5,
      tax: 6.16,
    },
  },
  component_inputs: [
    {
      label: 'Payment Details',
      prop: '[paymentDetails]',
      description: 'Show the payment details.',
      dataType: 'Object',
      typeObj: [
        { billingAdress: `Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8` },
        { cardNumber: '4242q345234624' },
        { subTotal: '72' },
        { shippingCost: '5' },
        { tax: '6.16' },
      ],
    },
    {
      label: 'Products detail',
      prop: '[productDetail]',
      description: 'Shows the detail of products.',
      dataType: 'Array',
      typeObj: [
        [
          { productName: 'Distant Mountains Artwork Tee' },
          { productPrice: '36.00' },
          {
            productDescription: `You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?`,
          },
          { productAdress: `Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8` },
          { buyerEmail: 'testing@example.com' },
          { buyerPhone: '111-222-333' },
          { deliveryDate: 'March 24, 2021  ' },
          { deliveryStatusLevel: '4' },
        ],
      ],
    },
    {
      label: 'Product Overview',
      prop: '[productOverview]',
      description: 'Show some basic order detail.',
      dataType: 'Object',
      typeObj: [{ heading: 'Order Detail' }, { orderNum: 'W086438695' }, { date: 'March 22, 2021' }],
    },
  ],
}

@Injectable()
export class DevOrderSummariesStore extends ComponentStore<DevOrderSummariesState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
