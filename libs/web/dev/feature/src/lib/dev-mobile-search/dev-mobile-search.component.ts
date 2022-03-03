import { Component } from '@angular/core'
import { DevMobileSearchStore } from './dev-mobile-search.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchStore],
})
export class DevMobileSearchComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchStore) {}
}
