import { Component } from '@angular/core'
import { DevDatePickerStore } from './dev-date-picker.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-date-picker/dev-date-picker.component.ts
      </code>
      <ui-preview>
        <ui-date-picker></ui-date-picker>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDatePickerStore],
})
export class DevDatePickerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDatePickerStore) {}
}
