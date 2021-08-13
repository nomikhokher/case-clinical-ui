import { Component } from '@angular/core'
import { DevProductOverviewsStore } from './dev-product-overviews.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-product-overviews></ui-product-overviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductOverviewsStore],
})
export class DevProductOverviewsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductOverviewsStore) {}
}
