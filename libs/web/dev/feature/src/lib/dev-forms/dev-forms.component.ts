import { Component } from '@angular/core'
import { DevFormsStore } from './dev-forms.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre>{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-forms/dev-forms.component.ts
      </code>
    </ng-container>
  `,
  providers: [DevFormsStore],
})
export class DevFormsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFormsStore) {}
}
