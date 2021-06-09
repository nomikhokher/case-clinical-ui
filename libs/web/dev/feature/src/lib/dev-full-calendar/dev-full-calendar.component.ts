import { Component } from '@angular/core'
import { DevFullCalendarStore } from './dev-full-calendar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-full-calendar/dev-full-calendar.component.ts
      </code>
      <ui-full-calendar></ui-full-calendar>
    </ng-container>
  `,
  providers: [DevFullCalendarStore],
})
export class DevFullCalendarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFullCalendarStore) {}
}
