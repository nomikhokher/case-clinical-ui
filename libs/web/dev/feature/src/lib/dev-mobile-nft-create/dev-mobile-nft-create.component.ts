import { Component } from '@angular/core'
import { DevMobileNftCreateStore } from './dev-mobile-nft-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileNftCreateStore],
})
export class DevMobileNftCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftCreateStore) {}
}
