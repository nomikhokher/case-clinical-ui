import { Component } from '@angular/core'
import { DevMobileProfileStore } from './dev-mobile-profile.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview>
        <ui-mobile-profile></ui-mobile-profile>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileStore],
})
export class DevMobileProfileComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileStore) {}
}
