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
  public codePreview
  constructor(private readonly store: DevProductQuickviewsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
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
          image: ${JSON.stringify(result.config.items.image, null, '\t')}
          title: ${JSON.stringify(result.config.items.title, null, '\t')}
          user_rating:${JSON.stringify(result.config.items.user_rating, null, '\t')}
          price:${JSON.stringify(result.config.items.price, null, '\t')}
          variants:${JSON.stringify(result.config.items.variants, null, '\t')}
          btnText:${JSON.stringify(result.config.items.btnText, null, '\t')}
        }`,
      ]
    })
  }
}
