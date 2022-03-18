import { Component } from '@angular/core'
import { DevMobileSearchAllStore } from './dev-mobile-search-all.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchAllStore],
})
export class DevMobileSearchAllComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchAllStore) {}
}
