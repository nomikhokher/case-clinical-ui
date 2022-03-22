import { Component } from '@angular/core'
import { DevMobileSearchArtworkStore } from './dev-mobile-search-artwork.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchArtworkStore],
})
export class DevMobileSearchArtworkComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchArtworkStore) {}
}
