import { Component } from '@angular/core'
import { DevShoppingCartStore } from './dev-shopping-cart.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-shopping-cart
          [orderAttribute]="vm.config.items.orderAttribute"
          [products]="vm.config.items.products"
        ></ui-shopping-cart>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevShoppingCartStore],
})
export class DevShoppingCartComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevShoppingCartStore) {}

  public codePreview = [
    `import { WebUiShoppingCartModule } from '@schema-driven/web/ui/shopping-cart' \n\n 
    <ui-shopping-cart 
      [orderAttribute]="vm.config.items.orderAttribute"
      [products]="vm.config.items.products"
    ></ui-shopping-cart> \n\n
    
    orderAttribute: [
      {
        label: 'Shipping estimate',
        value: 5.0,
      },
      {
        label: 'Tax estimate',
        value: 8.0,
      },
    ],
    products: [
      {
        id: 1,
        name: 'Basic Tee',
        route: '#',
        price: 32.0,
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
        qty: 1,
      },
      {
        id: 2,
        name: 'Basic Tee',
        route: '#',
        price: 32.0,
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        qty: 1,
      },
      {
        id: 3,
        name: 'Nomad Tumbler',
        route: '#',
        price: 35.0,
        color: 'White',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
        qty: 1,
      },
    ],
  }`,
  ]
}
