import { Component } from '@angular/core'
import { DevMobileNftPreviewStore } from './dev-mobile-nft-preview.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileNftPreviewStore],
})
export class DevMobileNftPreviewComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftPreviewStore) {}
}
