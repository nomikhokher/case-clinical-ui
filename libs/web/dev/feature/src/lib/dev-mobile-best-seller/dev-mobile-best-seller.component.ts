import { Component } from '@angular/core'
import { DevMobileBestSellerStore } from './dev-mobile-best-seller.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileBestSellerStore],
})
export class DevMobileBestSellerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileBestSellerStore) {}
}
