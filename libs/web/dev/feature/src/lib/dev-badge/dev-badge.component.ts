import { Component } from '@angular/core'
import { DevBadgeStore } from './dev-badge.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-badge
          [text]="vm.config.items.text"
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
