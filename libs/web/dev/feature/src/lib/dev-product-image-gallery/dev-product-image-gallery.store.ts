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

interface DevProductImageGalleryState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Banner',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-image-gallery/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Product Image Gallery', path: '/dev/product-image-gallery' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-product-image-gallery.component.ts',
  items: {
    images: [
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
      },
      {
        url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Images',
      prop: '[images]',
      description: 'Display images on gallery',
      dataType: 'Array',
      typeArray: [
        [{ url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg' }],
        [{ url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg' }],
        [{ url: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg' }],
      ],
    },
  ],
}

@Injectable()
export class DevProductImageGalleryStore extends ComponentStore<DevProductImageGalleryState> {
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
