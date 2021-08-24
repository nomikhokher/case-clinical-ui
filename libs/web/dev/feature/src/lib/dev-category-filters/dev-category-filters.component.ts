import { Component } from '@angular/core'
import { DevCategoryFiltersStore } from './dev-category-filters.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_outputs]="vm.component_outputs"
        [component_inputs]="vm.component_inputs"
        [codeObj]="vm.items"
      >
        <ui-category-filters
          [sectionTitle]="vm.items.sectionTitle"
          [description]="vm.items.description"
          [products]="vm.items.products"
          [categories]="vm.items.categories"
          [colors]="vm.items.colors"
          [sizes]="vm.items.sizes"
        ></ui-category-filters>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCategoryFiltersStore],
})
export class DevCategoryFiltersComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCategoryFiltersStore) {}

  public codePreview = [
    `import { WebUiCategoryFiltersModule } from '@schema-driven/web/ui/category-filters'\n\n 
    <ui-category-filters 
      [sectionTitle]="vm.items.sectionTitle"
      [description]="vm.items.description"
      [products]="vm.items.products"
      [categories]="vm.items.categories"
      [colors]="vm.items.colors"
      [sizes]="vm.items.sizes"
    >
    </ui-category-filters> \n\n
    {
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
    }
    `,
  ]
}
