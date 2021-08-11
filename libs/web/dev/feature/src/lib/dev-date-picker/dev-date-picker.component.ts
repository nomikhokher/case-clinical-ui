import { Component } from '@angular/core'
import { DevDatePickerStore } from './dev-date-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-date-picker
          [dateFormat]="vm.config.items.dateFormat"
          [inputGivenOrNot]="vm.config.items.inputGivenOrNot"
          [rangePicker]="vm.config.items.rangePicker"
          [timePicker]="vm.config.items.timePicker"
          [timePicker24Hour]="vm.config.items.timePicker24Hour"
          (getValueOfDate)="getValueOfDateEvent($event)"
        ></ui-date-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDatePickerStore],
})
export class DevDatePickerComponent {
  public getValueDate: any
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDatePickerStore) {}

  public getValueOfDateEvent(value: any): void {
    this.getValueDate = value
  }
}
