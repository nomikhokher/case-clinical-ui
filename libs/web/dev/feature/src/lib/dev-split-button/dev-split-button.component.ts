import { Component } from '@angular/core'
import { DevSplitButtonStore } from './dev-split-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-split-button/dev-split-button.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-split-button [lists]="lists"></ui-split-button>
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

  public lists: Lists[] = [
    {
      icon: 'clipboard',
      text: 'Paste',
    },
    {
      icon: 'clipboardCopy',
      text: 'Paste Special',
    },
    {
      icon: 'clipboardCheck',
      text: 'Paste as Formula',
    },
    {
      icon: 'clipboardList',
      text: 'Paste as Hyperlink',
    },
  ]
}

export type Lists = {
  icon?: string
  text?: string
}
