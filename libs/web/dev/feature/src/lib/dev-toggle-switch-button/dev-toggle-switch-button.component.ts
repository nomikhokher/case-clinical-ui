import { Component } from '@angular/core'
import { DevToggleSwitchButtonStore } from './dev-toggle-switch-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-toggle-switch-button/dev-toggle-switch-button.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-toggle-switch-button [buttons]="buttons"></ui-toggle-switch-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevToggleSwitchButtonStore],
})
export class DevToggleSwitchButtonComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevToggleSwitchButtonStore) {}

  public codePreview = [
    `import { WebUiToggleSwitchButtonModule } from '@schema-driven/web/ui/toggle-switch-button' \n\n 
      <ui-toggle-switch-button [buttons]="buttons"></ui-toggle-switch-button> \n\n
      buttons=[
        {
          id:1,
          height:'h-6',
          width:'w-6',
          left:'left-96',
          bgColor:'bg-green-600',
          divWidth:'w-12',
          divHeight:'h-8',
          onOff:false,
        },
    ]
      `,
  ]

  public buttons: Buttons[] = [
    {
      id: 1,
      height: 'h-6',
      width: 'w-6',
      left: 'left-96',
      bgColor: 'bg-green-600',
      divWidth: 'w-12',
      divHeight: 'h-8',
      onOff: false,
    },
  ]
}
export type Buttons = {
  id?: number
  height: string
  width: string
  left: string
  bgColor: string
  divWidth: string
  divHeight: string
  onOff: boolean
}
