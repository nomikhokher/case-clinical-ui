import { Component } from '@angular/core'
import { DevProgressBarStore } from './dev-progress-bar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-progress-bar/dev-progress-bar.component.ts
      </code>
      <ui-preview>
        <ui-progress-bar> </ui-progress-bar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressBarStore],
})
export class DevProgressBarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProgressBarStore) {}
}
