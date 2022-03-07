import { Component } from '@angular/core'
import { DevMobileDiscoveryLikeStore } from './dev-mobile-discovery-like.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryLikeStore],
})
export class DevMobileDiscoveryLikeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryLikeStore) {}
}
