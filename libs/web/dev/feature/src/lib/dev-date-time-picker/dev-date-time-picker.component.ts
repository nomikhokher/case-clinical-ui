import { Component } from '@angular/core'
import { DevDateTimePickerStore } from './dev-date-time-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-date-time-picker></ui-date-time-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDateTimePickerStore],
})
export class DevDateTimePickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDateTimePickerStore) {}
}
