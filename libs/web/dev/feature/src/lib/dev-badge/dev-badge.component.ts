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
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-badge
          [color]="vm.config.items.color"
          [size]="vm.config.items.size"
          [rounded]="vm.config.items.rounded"
          [icon]="vm.config.items.icon"
          [position]="vm.config.items.position"
        ></ui-badge>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBadgeStore],
})
export class DevBadgeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBadgeStore) {}
  public codePreview = [
    `import { WebUiBadgeModule } from '@schema-driven/web/ui/badge'\n\n<ui-badge color="green" size="sm" rounded="rounded" icon=""></ui-badge> `,
    `import { WebUiBadgeModule } from '@schema-driven/web/ui/badge\n\n<ui-badge color="green" size="sm" removeIcon="remove"></ui-badge>`,
  ]
}
