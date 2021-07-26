import { Component } from '@angular/core'
import { DevDateTimePickerStore } from './dev-date-time-picker.store'

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
