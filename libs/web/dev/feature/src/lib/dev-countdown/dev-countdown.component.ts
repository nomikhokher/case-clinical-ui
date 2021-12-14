import { Component } from '@angular/core'
import { DevCountdownStore } from './dev-countdown.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-countdown [countDown]="120"></ui-countdown>
    </ng-container>
  `,
  providers: [DevCountdownStore],
})
export class DevCountdownComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCountdownStore) {}
}
