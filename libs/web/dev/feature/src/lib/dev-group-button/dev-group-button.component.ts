import { Component } from '@angular/core'
import { DevGroupButtonStore } from './dev-group-button.store'

export interface DropDownMenu {
  id?: string
  name: string
}

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-group-button/dev-group-button.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-group-button [buttons]="vm.buttons"></ui-group-button>
      </ui-preview>
      <ui-preview [code]="codePreview[1]">
        <ui-dropdown-button [dropDownMenus]="dropDownMenu"></ui-dropdown-button>
      </ui-preview>
      <ui-preview [code]="codePreview[2]">
        <ui-checkbox-dropdown-button [dropDownMenus]="dropDownMenu"></ui-checkbox-dropdown-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevGroupButtonStore],
})
export class DevGroupButtonComponent {
  readonly vm$ = this.store.vm$

  readonly dropDownMenu: DropDownMenu[] = [
    {
      id: '1',
      name: 'Years',
    },
    {
      id: '2',
      name: 'Months',
    },
    {
      id: '3',
      name: 'Days',
    },
  ]

  constructor(private readonly store: DevGroupButtonStore) {}

  ngOnInit() {}
  public codePreview = [
    `<ui-group-button [buttons]="vm.buttons"></ui-group-button>`,
    `<ui-dropdown-button [dropDownMenus]="dropDownMenu"></ui-dropdown-button>`,
    `<ui-checkbox-dropdown-button [dropDownMenus]="dropDownMenu"></ui-checkbox-dropdown-button>`,
  ]
}
