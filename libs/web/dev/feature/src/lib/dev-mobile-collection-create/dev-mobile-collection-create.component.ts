import { Component } from '@angular/core'
import { DevMobileCollectionCreateStore } from './dev-mobile-collection-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileCollectionCreateStore],
})
export class DevMobileCollectionCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCollectionCreateStore) {}
}
