import { Component } from '@angular/core'
import { DevSplitButtonStore } from './dev-split-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [code]="codePreview[0]"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-split-button [lists]="vm.config.items.lists"></ui-split-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSplitButtonStore],
})
export class DevSplitButtonComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSplitButtonStore) {}

  public codePreview = [
    `import { WebUiSplitButtonModule } from '@schema-driven/web/ui/split-button' \n\n 
      <ui-split-button [lists]="lists"></ui-split-button> \n\n
      lists=[
        {
          icon:'clipboard',
          text:'Paste',
        },
        {
          icon:'clipboardCopy',
          text:'Paste Special',
        },
        {
          icon:'clipboardCheck',
          text:'Paste as Formula',
        },
        {
          icon:'clipboardList',
          text:'Paste as Hyperlink',
        },
    ]
      `,
  ]
}
