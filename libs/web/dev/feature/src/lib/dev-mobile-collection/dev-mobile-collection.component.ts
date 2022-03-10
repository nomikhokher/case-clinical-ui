import { Component } from '@angular/core'
import { DevMobileCollectionStore } from './dev-mobile-collection.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileCollectionStore],
})
export class DevMobileCollectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCollectionStore) {}
}
