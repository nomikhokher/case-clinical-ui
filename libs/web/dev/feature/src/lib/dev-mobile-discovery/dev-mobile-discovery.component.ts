import { Component } from '@angular/core'
import { DevMobileDiscoveryStore } from './dev-mobile-discovery.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryStore],
})
export class DevMobileDiscoveryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryStore) {}
}
