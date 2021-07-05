import { Component } from '@angular/core'
import { DevDateRangePickerStore } from './dev-date-range-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-date-range-picker/dev-date-range-picker.component.ts
      </code>
      <ui-preview>
        <ui-date-range-picker></ui-date-range-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDateRangePickerStore],
})
export class DevDateRangePickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDateRangePickerStore) {}
}
