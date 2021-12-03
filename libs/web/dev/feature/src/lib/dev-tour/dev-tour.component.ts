import { Component } from '@angular/core'
import { DevTourStore } from './dev-tour.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-tour></ui-tour>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTourStore],
})
export class DevTourComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTourStore) {}
}
