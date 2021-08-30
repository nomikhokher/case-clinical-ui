import { Component } from '@angular/core'
import { DevProductQuickviewsStore } from './dev-product-quickviews.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-product-quickviews
          [image]="vm.config.items.image"
          [title]="vm.config.items.title"
          [user_rating]="vm.config.items.user_rating"
          [price]="vm.config.items.price"
          [variants]="vm.config.items.variants"
          [btnText]="vm.config.items.btnText"
        ></ui-product-quickviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductQuickviewsStore],
})
export class DevProductQuickviewsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductQuickviewsStore) {}

  public codePreview = [
    `import { WebUiProductQuickviewsModule } from '@schema-driven/web/ui/product-quickviews'\n\n
    <ui-product-quickviews 
      [image]="vm.config.items.image"
      [title]="vm.config.items.title"
      [user_rating]="vm.config.items.user_rating"
      [price]="vm.config.items.price"
      [variants]="vm.config.items.variants"
      [btnText]="vm.config.items.btnText"
    >
    </ui-product-quickviews>\n\n 
    {
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
    }`,
  ]
}
