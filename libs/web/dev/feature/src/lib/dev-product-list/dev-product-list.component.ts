import { Component } from '@angular/core'
import { DevProductListStore } from './dev-product-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-product-list></ui-product-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductListStore],
})
export class DevProductListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductListStore) {}
}
