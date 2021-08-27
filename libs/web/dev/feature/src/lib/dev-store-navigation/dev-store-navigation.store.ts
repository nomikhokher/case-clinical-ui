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

interface DevStoreNavigationState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Store Navigation',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/store-navigation/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Store Navigation', path: '/dev/store-navigation' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-store-navigation.component.ts',
  items: {
    products: [
      {
        tab_id: 1,
        title: 'New Arrivals',
        image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
      },
      {
        tab_id: 1,
        title: 'Basic Tee',
        image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
      },
      {
        tab_id: 2,
        title: 'Accessories',
        image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
      },
      {
        tab_id: 1,
        title: 'Carry',
        image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
      },
    ],

    tabs: [
      {
        id: 1,
        title: 'Women',
      },
      {
        id: 2,
        title: 'Men',
      },
      {
        id: 3,
        title: 'Company',
      },
      {
        id: 4,
        title: 'Stores',
      },
    ],

    currencies: [
      {
        id: 1,
        title: 'CAD',
      },
      {
        id: 2,
        title: 'USD',
      },
      {
        id: 3,
        title: 'Company',
      },
      {
        id: 4,
        title: 'EUR',
      },
      {
        id: 5,
        title: 'GBP',
      },
    ],

    btnText: 'Shop now',
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
export class DevStoreNavigationStore extends ComponentStore<DevStoreNavigationState> {
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
