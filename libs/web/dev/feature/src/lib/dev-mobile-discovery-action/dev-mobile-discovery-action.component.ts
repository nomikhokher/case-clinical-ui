import { Component } from '@angular/core'
import { DevMobileDiscoveryActionStore } from './dev-mobile-discovery-action.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryActionStore],
})
export class DevMobileDiscoveryActionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryActionStore) {}
}
