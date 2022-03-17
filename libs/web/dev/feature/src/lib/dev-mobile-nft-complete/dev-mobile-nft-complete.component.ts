import { Component } from '@angular/core'
import { DevMobileNftCompleteStore } from './dev-mobile-nft-complete.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileNftCompleteStore],
})
export class DevMobileNftCompleteComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftCompleteStore) {}
}
