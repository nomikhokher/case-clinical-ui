import { Component } from '@angular/core'
import { DevSignInAndRegistrationStore } from './dev-sign-in-and-registration.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-sign-in-and-registration
          [title]="vm.config.items.title"
          [image]="vm.config.items.image"
          [icons]="vm.config.items.icons"
          [trash]="'trash'"
        ></ui-sign-in-and-registration>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSignInAndRegistrationStore],
})
export class DevSignInAndRegistrationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSignInAndRegistrationStore) {}
}
