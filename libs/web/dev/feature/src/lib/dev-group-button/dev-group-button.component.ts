import { Component } from '@angular/core'
import { DevGroupButtonStore } from './dev-group-button.store'

export interface DropDownMenu {
  id?: string
  name: string
}

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-group-button/dev-group-button.component.ts
      </code>
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-group-button [buttons]="vm.config.items"></ui-group-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevGroupButtonStore],
})
export class DevGroupButtonComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevGroupButtonStore) {}

  ngOnInit() {}
  public codePreview = [
    `import { WebUiGroupButtonModule } from '@schema-driven/web/ui/group-button'\n\n<ui-group-button [buttons]="vm.buttons"></ui-group-button>
    vm.buttons = [
      {
        id: '1',
        name: 'Years',
        icon: 'chevronLeft',
        dircetion: 'right',
      },
      {
        id: '2',
        name: 'Months',
        icon: 'chevronRight',
        dircetion: 'right',
      },
      {
        id: '3',
        name: 'Days',
      },
    ]`,
  ]
}
