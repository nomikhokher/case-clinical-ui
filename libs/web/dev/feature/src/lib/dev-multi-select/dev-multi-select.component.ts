import { Component, SimpleChanges } from '@angular/core'
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
        [code]="codePreview[0]"
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
  public codePreview = [
    `import { WebUiMultiSelectModule } from '@schema-driven/web/ui/multi-select'\n\n
    <ui-multi-select [data]="data"></ui-multi-select>\n
    data =  [
      { id: 1, value: 'Option 1', selected: false },
      { id: 2, value: 'Option 2', selected: false },
      { id: 3, value: 'Option 3', selected: false },
      { id: 4, value: 'Option 4', selected: false },
      { id: 5, value: 'Option 5', selected: false },
      { id: 6, value: 'Option 6', selected: false },
    ],
    `,
  ]
}
