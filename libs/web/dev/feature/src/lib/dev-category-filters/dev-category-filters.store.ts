import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { of } from 'rxjs'
import { Product, Color, Category, Size, Input, Output } from './model'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  sectionTitle?: String
  description?: String
  products?: Product[]
  colors?: Color[]
  categories?: Category[]
  sizes?: Size[]
}

interface DevCategoryFiltersState {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
  component_inputs?: Input[]
  component_outputs?: Output[]
}

@Injectable()
export class DevCategoryFiltersStore extends ComponentStore<DevCategoryFiltersState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Category Filters',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/category-filters/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Category Filters', path: '/dev/category-filters' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-category-filters/dev-category-filters.component.ts',
      items: {
        sectionTitle: 'New Arrivals',
        description: 'Checkout out the latest release of Basic Tees, new and improved with four openings!',
        products: [
          {
            title: 'Basic Tee',
            price: 35,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            category_id: 1,
            color_id: 2,
            size_id: 2,
          },
          {
            title: 'Basic Tee',
            price: 45,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            category_id: 2,
            color_id: 3,
            size_id: 3,
          },
          {
            title: 'Basic Tee',
            price: 55,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            category_id: 4,
            color_id: 4,
            size_id: 4,
          },
          {
            title: 'Basic Tee',
            price: 65,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
            category_id: 2,
            color_id: 1,
            size_id: 2,
          },
          {
            title: 'Basic Tee',
            price: 65,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            category_id: 5,
            color_id: 5,
            size_id: 5,
          },
        ],

        categories: [
          {
            id: 1,
            title: 'All New Arrivals',
          },
          {
            id: 2,
            title: 'Crewnecks',
          },
          {
            id: 3,
            title: 'Sweatshirts',
          },
          {
            id: 4,
            title: 'Pants & Shorts',
          },
          {
            id: 5,
            title: 'Tees',
          },
        ],

        colors: [
          {
            id: 1,
            name: 'white',
          },
          {
            id: 2,
            name: 'Beige',
          },
          {
            id: 3,
            name: 'Blue',
          },
          {
            id: 4,
            name: 'Brown',
          },
          {
            id: 5,
            name: 'Green',
          },
          {
            id: 6,
            name: 'Purple',
          },
        ],

        sizes: [
          {
            id: 1,
            name: 'XS',
          },
          {
            id: 2,
            name: 'S',
          },
          {
            id: 3,
            name: 'M',
          },
          {
            id: 4,
            name: 'L',
          },
          {
            id: 5,
            name: 'XL',
          },
          {
            id: 6,
            name: '2XL',
          },
        ],
      },
      component_inputs: [
        {
          label: 'Section Title',
          prop: '[sectionTitle]',
          description: `Display the title of section.`,
          dataType: 'String',
        },
        {
          label: 'Description',
          prop: '[description]',
          description: `Display the description of section.`,
          dataType: 'String',
        },
        {
          label: 'Product List',
          prop: '[products]',
          description: `Display the list of products.`,
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
            [
              { title: 'Basic Tee' },
              { price: '65' },
              { color: 'Green' },
              { image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg' },
            ],
          ],
        },
        {
          label: 'Color',
          prop: '[colors]',
          description: 'Display the colors.',
          dataType: 'Array',
          typeArray: [
            [{ name: 'White' }],
            [{ name: 'Beige' }],
            [{ name: 'Blue' }],
            [{ name: 'Brown' }],
            [{ name: 'Green' }],
            [{ name: 'Purple' }],
          ],
        },
        {
          label: 'Categories',
          prop: '[categories]',
          description: 'Display the categories',
          dataType: 'Array',
          typeArray: [
            [{ title: 'All New Arrivals' }],
            [{ title: 'Crewnecks' }],
            [{ title: 'Sweatshirts' }],
            [{ title: 'Pants & Shorts' }],
            [{ title: 'Tees' }],
          ],
        },
        {
          label: 'Sizes',
          prop: '[sizes]',
          description: 'Display the sizes of products',
          dataType: 'Array',
          typeArray: [
            [{ name: 'XS' }],
            [{ name: 'S' }],
            [{ name: 'M' }],
            [{ name: 'L' }],
            [{ name: 'XL' }],
            [{ name: '2XL' }],
          ],
        },
      ],
      component_outputs: [
        { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
      ],
    })
  }

  readonly vm$ = this.select(this.state$, (s) => s)
}
