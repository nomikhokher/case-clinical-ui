import { Component } from '@angular/core'
import { DevTagTextareaStore } from './dev-tag-textarea.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-tag-textarea [color]="vm.config.items.color"></ui-tag-textarea>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTagTextareaStore],
})
export class DevTagTextareaComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTagTextareaStore) {}
  public codePreview = [
    `import { WebUiTagTextareaModule } from '@schema-driven/web/ui/tag-textarea'\n\n<ui-tag-textarea [color]="vm.config.items.color"></ui-tag-textarea> \n\n {
      color:'green'
    }`,
  ]
}
