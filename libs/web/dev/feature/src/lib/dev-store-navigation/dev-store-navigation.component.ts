import { Component } from '@angular/core'
import { DevStoreNavigationStore } from './dev-store-navigation.store'

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
        <ui-store-navigation
          [products]="vm.config.items.products"
          [tabs]="vm.config.items.tabs"
          [currencies]="vm.config.items.currencies"
          [btnText]="vm.config.items.btnText"
        ></ui-store-navigation>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStoreNavigationStore],
})
export class DevStoreNavigationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStoreNavigationStore) {}

  public codePreview = [
    `import { WebUiStoreNavigationModule } from '@schema-driven/web/ui/store-navigation'\n\n
    <ui-store-navigation 
      [products]="vm.config.items.products"
      [tabs]="vm.config.items.tabs"
      [currencies]="vm.config.items.currencies"
      [btnText]="vm.config.items.btnText"
    >
    </ui-store-navigation>\n\n 
    {
      products: [
        {
          tab_id:1,
          title: 'New Arrivals',
          image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
        },
        {
          tab_id:1,
          title: 'Basic Tee',
          image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
        },
        {
          tab_id:2,
          title: 'Accessories',
          image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
        },
        {
          tab_id:1,
          title: 'Carry',
          image: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
        },
      ],
  
      tabs: [
        {
          id:1,
          title:'Women'
        },
        {
          id:2,
          title:'Men'
        },
        {
          id:3,
          title:'Company'
        },
        {
          id:4,
          title:'Stores'
        },
      ],
  
      currencies:[
        {
          id:1,
          title:'CAD'
        },
        {
          id:2,
          title:'USD'
        },
        {
          id:3,
          title:'Company'
        },
        {
          id:4,
          title:'EUR'
        },
        {
          id:5,
          title:'GBP'
        },
      ],
  
      btnText :'Shop now'
    
    }`,
  ]
}
