import { Component } from '@angular/core'
import { DevMobileBestSellerScrollStore } from './dev-mobile-best-seller-scroll.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileBestSellerScrollStore],
})
export class DevMobileBestSellerScrollComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileBestSellerScrollStore) {}
}
