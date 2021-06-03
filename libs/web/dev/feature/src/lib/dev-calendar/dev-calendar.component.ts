import { Component } from '@angular/core'
import { DevCalendarStore } from './dev-calendar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-calendar></ui-calendar>
    </ng-container>
  `,
  providers: [DevCalendarStore],
})
export class DevCalendarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCalendarStore) {}
}
