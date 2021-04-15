import { Component } from '@angular/core'
import { DevBadgeStore } from './dev-badge.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-badge/dev-badge.component.ts
      </code>
      <ui-preview>
        <ui-badge color="green" size="sm" rounded="rounded" icon=""></ui-badge>
      </ui-preview>
      <ui-preview>
        <ui-badge color="green" size="sm" removeIcon="remove"></ui-badge>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBadgeStore],
})
export class DevBadgeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBadgeStore) {}
}
