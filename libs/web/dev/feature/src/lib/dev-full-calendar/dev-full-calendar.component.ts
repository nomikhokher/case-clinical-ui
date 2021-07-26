import { Component } from '@angular/core'
import { DevFullCalendarStore } from './dev-full-calendar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-full-calendar></ui-full-calendar>
    </ng-container>
  `,
  providers: [DevFullCalendarStore],
})
export class DevFullCalendarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFullCalendarStore) {}
}
