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

interface DevProductQuickviewsState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Product Quickviews',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-quickviews/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Product Quickviews', path: '/dev/product-quickviews' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-product-quickviews.component.ts',
  items: {
    title: 'Basic Tee',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
    user_rating: 3.5,
    price: 35,
    btnText: 'Add to bag',
    variants: [
      {
        color: [
          {
            values: 'gray',
          },
          {
            values: 'yellow',
          },
        ],
      },
      {
        size: [{ values: 'xxs' }, { values: 'xs' }, { values: 'm' }],
      },
    ],
  },
  component_inputs: [
    {
      label: 'Product Title',
      prop: '[title]',
      description: 'Display the title of product',
      dataType: 'String',
    },
    {
      label: 'Product Image',
      prop: '[image]',
      description: 'Adjust the product image',
      dataType: 'String',
    },
    {
      label: 'User Rating',
      prop: '[user_rating]',
      description: 'Display the rating of user',
      dataType: 'Number',
    },
    {
      label: 'Product Price',
      prop: '[price]',
      description: 'Display the price of product',
      dataType: 'Number',
    },
    {
      label: 'Button',
      prop: '[btnText]',
      description: 'Display buttons text in the model',
      dataType: 'String',
    },
    {
      label: 'Variants',
      prop: '[variants]',
      description: 'Manage variants of the model',
      dataType: 'Array',
    },
  ],
}

@Injectable()
export class DevProductQuickviewsStore extends ComponentStore<DevProductQuickviewsState> {
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
