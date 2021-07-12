import { Component } from '@angular/core'
import { DevChipsStore } from './dev-chips.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-chips/dev-chips.component.ts
      </code>
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-chips [chips]="vm.config.items"></ui-chips>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevChipsStore],
})
export class DevChipsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevChipsStore) {}

  public codePreview = [
    `import { WebUiChipsModule } from '@schema-driven/web/ui/chips' \n\n 
      <ui-chips [chips]="chips"></ui-chips> \n\nchips=[
        {
          text:'hello!',
          bgColor:'bg-gray-100',
          textColor:'text-gray-700',
          hoverColor:'bg-gray-200',
        },
      ]
    },`,
  ]
}
