import { Component } from '@angular/core'
import { DevMobileProfileFollowingStore } from './dev-mobile-profile-following.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileFollowingStore],
})
export class DevMobileProfileFollowingComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileFollowingStore) {}
}
