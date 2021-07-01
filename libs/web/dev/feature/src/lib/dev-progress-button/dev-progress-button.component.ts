import { Component } from '@angular/core'
import { DevProgressButtonStore } from './dev-progress-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-progress-button/dev-progress-button.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-progress-button [buttons]="buttons"></ui-progress-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressButtonStore],
})
export class DevProgressButtonComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProgressButtonStore) {}

  public codePreview = [
    `import { WebUiProgressButtonModule } from '@schema-driven/web/ui/progress-button' \n\n 
    <ui-progress-button [buttons]="buttons"></ui-progress-button> \n\n
      buttons=[
        {
          id:1,
          text:'Spin Left',
          color:'red',
          position:'left',
          icon:'spinners',
          showHide:false,
        },
        {
          id:2,
          text:'Spin Right',
          color:'green',
          position:'right',
          icon:'spinners',
          showHide:false,
        },
    ]
  `,
  ]

  public buttons: Button[] = [
    {
      id: 1,
      text: 'Spin Left',
      color: 'red',
      position: 'left',
      icon: 'spinners',
      showHide: false,
    },
    {
      id: 2,
      text: 'Spin Right',
      color: 'green',
      position: 'right',
      icon: 'spinners',
      showHide: false,
    },
  ]
}

export type Button = {
  id?: number
  text: string
  color?: string
  position?: string
  icon?: string
  showHide: boolean
}
