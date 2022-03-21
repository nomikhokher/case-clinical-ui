import { Component } from '@angular/core'
import { DevMobileSearchCreatorStore } from './dev-mobile-search-creator.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchCreatorStore],
})
export class DevMobileSearchCreatorComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchCreatorStore) {}
}
