import { Component } from '@angular/core'
import { DevDateRangePickerStore } from './dev-date-range-picker.store'

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
        <ui-date-range-picker [dateFormat]="''" [icon]="false"></ui-date-range-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDateRangePickerStore],
})
export class DevDateRangePickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDateRangePickerStore) {}
}

// export enum DateFormat {
//   DDMMYYYY = 'DD-MM-YYYY',
//   MMDDYYYY = 'MM-DD-YYYY',
//   YYYYMMDD = 'YYYY-MM-DD',
//   Ll = 'll',
// }
