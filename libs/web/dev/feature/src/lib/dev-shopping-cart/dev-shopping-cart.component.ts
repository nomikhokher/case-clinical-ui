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
  public codePreview
  constructor(private readonly store: DevShoppingCartStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiShoppingCartModule } from '@schema-driven/web/ui/shopping-cart' \n\n 
        <ui-shopping-cart 
          [orderAttribute]="vm.config.items.orderAttribute"
          [products]="vm.config.items.products"
        ></ui-shopping-cart> \n\n
        {
          orderAttribute: ${JSON.stringify(result.config.items.orderAttribute, null, '\t')}
          products: ${JSON.stringify(result.config.items.products, null, '\t')}
        }`,
      ]
    })
  }
}
