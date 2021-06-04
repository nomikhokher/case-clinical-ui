import { Component } from '@angular/core'
import { DevMiniCalendarStore } from './dev-mini-calendar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mini-calendar></ui-mini-calendar>
    </ng-container>
  `,
  providers: [DevMiniCalendarStore],
})
export class DevMiniCalendarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMiniCalendarStore) {}
}
