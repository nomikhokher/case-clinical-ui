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

interface DevProductListState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Product List',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-list/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Product List', path: '/dev/product-list' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-product-list/dev-product-list.component.ts',
  items: {
    sectionHeading: 'Customers also purchased',
    products: [
      {
        title: 'Basic Tee',
        price: 35,
        color: 'Black',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      },
      {
        title: 'Basic Tee',
        price: 45,
        color: 'White',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      },
      {
        title: 'Basic Tee',
        price: 55,
        color: 'Charcoal',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      },
      {
        title: 'Basic Tee',
        price: 65,
        color: 'ISO Dot',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Section Heading',
      prop: '[sectionHeading]',
      description: 'Display the Section Heading of products.',
      dataType: 'String',
    },
    {
      label: 'Product List',
      prop: '[products]',
      description: 'Display the list of products.',
      dataType: 'Array',
      typeArray: [
        [
          { title: 'Basic Tee' },
          { price: '35' },
          { color: 'Black' },
          { image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
        ],
        [
          { title: 'Basic Tee' },
          { price: '45' },
          { color: 'White' },
          { image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg' },
        ],
        [
          { title: 'Basic Tee' },
          { price: '55' },
          { color: 'Charcoal' },
          { image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg' },
        ],
        [
          { title: 'Basic Tee' },
          { price: '65' },
          { color: 'ISO Dot' },
          { image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg' },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevProductListStore extends ComponentStore<DevProductListState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
