import { Component } from '@angular/core'
import { DevMultiSelectStore } from './dev-multi-select.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-multi-select [data]="vm.config.items.data"></ui-multi-select>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMultiSelectStore],
})
export class DevMultiSelectComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMultiSelectStore) {}
}
