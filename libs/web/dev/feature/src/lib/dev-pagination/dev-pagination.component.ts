import { Component } from '@angular/core'
import { DevPaginationStore } from './dev-pagination.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-pagination/dev-pagination.component.ts
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
        <ui-pagination [pages]="vm.config.items.pages" [difference]="vm.config.items.difference"> </ui-pagination>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPaginationStore],
})
export class DevPaginationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPaginationStore) {}
  public codePreview = [
    `import { WebUiPaginationModule } from '@schema-driven/web/ui/pagination'\n\n<ui-pagination [pages]="pages" [isPages]="isPages" [isPageSpan]="isPageSpan" [direction]="direction">
    </ui-pagination>\n\n direction = 'right' \n\n pages = 50 \n\n difference = 7`,
  ]
  public pages = 50
  public difference = 7
}
