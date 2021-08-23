import { Component } from '@angular/core'
import { DevProductListStore } from './dev-product-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-product-list
          [products]="vm.config.items.products"
          [sectionHeading]="vm.config.items.sectionHeading"
        ></ui-product-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductListStore],
})
export class DevProductListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductListStore) {}

  public codePreview = [
    `import { WebUiProductListModule } from '@schema-driven/web/ui/product-list' \n\n 
    <ui-product-list 
    [products]="vm.config.items.products"
    [sectionHeading]="vm.config.items.sectionHeading">
    </ui-newsletter> \n\n
    {
      sectionHeading:'Customers also purchased',
      products:[
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
      ]
    }`,
  ]
}
