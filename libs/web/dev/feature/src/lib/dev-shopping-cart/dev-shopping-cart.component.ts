import { Component } from '@angular/core'
import { DevShoppingCartStore } from './dev-shopping-cart.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
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
}
