import { Component } from '@angular/core'
import { DevMobileProfileHomeStore } from './dev-mobile-profile-home.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileHomeStore],
})
export class DevMobileProfileHomeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileHomeStore) {}
}
