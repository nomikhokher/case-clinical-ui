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

interface DevProductFeaturesState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Product Features',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-features/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Product Features', path: '/dev/product-features' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-product-features/dev-product-features.component.ts',
  items: {
    featureOverview: {
      heading: 'Technical Specifications',
      description: `Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting digital apps and embrace these small, sturdy pieces of paper.`,
    },

    tabsData: [
      {
        id: 1,
        title: 'Adaptive and modular',
        description: `The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.`,
        productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
      },
      {
        id: 2,
        title: 'Natural wood options',
        description: `Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material.`,
        productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
      },
      {
        id: 3,
        title: 'Helpful around the home',
        description: `Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more.  `,
        productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
      },
      {
        id: 4,
        title: `Everything you'll need`,
        description: `The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items.`,
        productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
      },
    ],

    tabs: [
      { id: 1, name: 'Design' },
      { id: 2, name: 'Material' },
      { id: 3, name: 'Considerations' },
      { id: 4, name: 'Included' },
    ],
    withTabs: true,
  },
  component_inputs: [
    {
      label: 'Tabs',
      prop: '[withTabs]',
      description: 'Toggle with tabs or without tabs.',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Tabs Name',
      prop: '[tabs]',
      description: 'Show the tabs name in tabs section.',
      dataType: 'Array',
      typeArray: [[{ name: 'Design' }], [{ name: 'Materail' }], [{ name: 'Considerations' }], [{ name: 'Included' }]],
    },
    {
      label: 'Tabs Data',
      prop: '[tabsData]',
      description: 'Show the features of product in tabs.',
      dataType: 'Array',
      typeArray: [
        [
          { title: 'Adaptive and modular' },
          {
            description: `The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.`,
          },
          { productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg' },
        ],
        [
          { title: 'Natural wood options' },
          {
            description: `Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material.`,
          },
          { productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg' },
        ],
        [
          { title: 'Helpful around the home' },
          {
            description: `Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more.  `,
          },
          { productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg' },
        ],
        [
          { title: `Everything you'll need` },
          {
            description: `The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items.`,
          },
          { productImg: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg' },
        ],
      ],
    },
    {
      label: 'Product Features',
      prop: '[featureOverview]',
      description: 'Shows the product feature overview.',
      dataType: 'Object',
    },
  ],
}

@Injectable()
export class DevProductFeaturesStore extends ComponentStore<DevProductFeaturesState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
