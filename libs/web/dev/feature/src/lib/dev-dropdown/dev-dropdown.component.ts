import { Component } from '@angular/core'
import { DevDropdownStore } from './dev-dropdown.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-dropdown/dev-dropdown.component.ts
      </code>
      <ui-preview [component_props]="[{ name: 'items', value: vm.items }]" [code]="codePreview[0]">
        <ng-container>
          <ui-dropdown direction="right" [items]="vm.items"></ui-dropdown>
        </ng-container>
      </ui-preview>
      <ui-preview [component_props]="[{ name: 'items', value: vm.items }]" [code]="codePreview[1]">
        <ng-container>
          <ui-dropdown direction="left" icon="heroicon" [items]="vm.items"></ui-dropdown>
        </ng-container>
      </ui-preview>
      <ui-preview [component_props]="[{ name: 'items', value: vm.items }]" [code]="codePreview[2]">
        <ng-container>
          <ui-dropdown direction="left" [heading]="heading" [items]="vm.items"></ui-dropdown>
        </ng-container>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDropdownStore],
})
export class DevDropdownComponent {
  readonly vm$ = this.store.vm$
  public heading: boolean = true
  constructor(private readonly store: DevDropdownStore) {}
  public codePreview = [
    `import { WebUiDropdownModule } from '@schema-driven/web/ui/dropdown'\n\n
    <ui-dropdown direction="right" [items]="vm.items"></ui-dropdown>\n\nreadonly vm$ = this.store.vm$`,
    `import { WebUiDropdownModule } from '@schema-driven/web/ui/dropdown'\n\n
    <ui-dropdown direction="left" icon="heroicon" [items]="vm.items"></ui-dropdown>\n\nreadonly vm$ = this.store.vm$`,
    `import { WebUiDropdownModule } from '@schema-driven/web/ui/dropdown'\n\n
    <ui-dropdown direction="left" [heading]="heading" [items]="vm.items"></ui-dropdown>\n\npublic heading: boolean = true\n\nreadonly vm$ = this.store.vm$`,
  ]
}
