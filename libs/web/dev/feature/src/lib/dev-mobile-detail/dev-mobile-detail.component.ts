import { Component } from '@angular/core'
import { DevMobileDetailStore } from './dev-mobile-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileDetailStore],
})
export class DevMobileDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDetailStore) {}
}
