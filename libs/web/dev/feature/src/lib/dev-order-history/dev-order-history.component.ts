import { Component } from '@angular/core'
import { DevOrderHistoryStore } from './dev-order-history.store'

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
        <ui-order-history [orders]="vm.config.items.orderHistory"></ui-order-history>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevOrderHistoryStore],
})
export class DevOrderHistoryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevOrderHistoryStore) {}
}
