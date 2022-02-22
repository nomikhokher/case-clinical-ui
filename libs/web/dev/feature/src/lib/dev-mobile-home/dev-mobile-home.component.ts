import { Component } from '@angular/core'
import { DevMobileHomeStore } from './dev-mobile-home.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileHomeStore],
})
export class DevMobileHomeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileHomeStore) {}
}
