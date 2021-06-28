import { Component } from '@angular/core'
import { DevSignInAndRegistrationStore } from './dev-sign-in-and-registration.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-sign-in-and-registration/dev-sign-in-and-registration.component.ts
      </code>
      <ui-preview>
        <ui-sign-in-and-registration></ui-sign-in-and-registration>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSignInAndRegistrationStore],
})
export class DevSignInAndRegistrationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSignInAndRegistrationStore) {}
}
