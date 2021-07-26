import { Component } from '@angular/core'
import { DevDateTimeRangePickerStore } from './dev-date-time-range-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-date-time-range-picker [dateFormat]="''" [icon]="false"></ui-date-time-range-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDateTimeRangePickerStore],
})
export class DevDateTimeRangePickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDateTimeRangePickerStore) {}
}
