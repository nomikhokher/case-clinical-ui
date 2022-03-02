import { Component } from '@angular/core'
import { DevSearchScreenStore } from './dev-search-screen.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-search-screen></ui-search-screen>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSearchScreenStore],
})
export class DevSearchScreenComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSearchScreenStore) {}
}
