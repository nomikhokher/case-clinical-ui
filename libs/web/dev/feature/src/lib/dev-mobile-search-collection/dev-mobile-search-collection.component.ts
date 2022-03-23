import { Component } from '@angular/core'
import { DevMobileSearchCollectionStore } from './dev-mobile-search-collection.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchCollectionStore],
})
export class DevMobileSearchCollectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchCollectionStore) {}
}
