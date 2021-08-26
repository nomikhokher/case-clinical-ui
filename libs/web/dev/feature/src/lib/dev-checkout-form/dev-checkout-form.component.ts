import { Component } from '@angular/core'
import { DevCheckoutFormStore } from './dev-checkout-form.store'

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
        <ui-checkout-form
          [products]="vm.config.items.products"
          [orderAttributes]="vm.config.items.orderAttributes"
        ></ui-checkout-form>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCheckoutFormStore],
})
export class DevCheckoutFormComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCheckoutFormStore) {}
}
