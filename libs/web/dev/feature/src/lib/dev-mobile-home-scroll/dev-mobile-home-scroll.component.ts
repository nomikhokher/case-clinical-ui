import { Component } from '@angular/core'
import { DevMobileHomeScrollStore } from './dev-mobile-home-scroll.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileHomeScrollStore],
})
export class DevMobileHomeScrollComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileHomeScrollStore) {}
}
