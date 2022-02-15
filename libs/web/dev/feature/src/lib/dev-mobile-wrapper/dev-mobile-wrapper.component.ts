import { Component } from '@angular/core'
import { DevMobileWrapperStore } from './dev-mobile-wrapper.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview [title]="vm.config.headerTitle">
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-mobile-wrapper> </ui-mobile-wrapper>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMobileWrapperStore],
})
export class DevMobileWrapperComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileWrapperStore) {}
}
