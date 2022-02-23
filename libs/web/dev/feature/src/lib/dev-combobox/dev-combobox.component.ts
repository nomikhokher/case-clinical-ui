import { Component } from '@angular/core'
import { DevComboboxStore } from './dev-combobox.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-combobox></ui-combobox>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevComboboxStore],
})
export class DevComboboxComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevComboboxStore) {}
}
