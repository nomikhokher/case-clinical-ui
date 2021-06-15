import { Component } from '@angular/core'
import { VerticalNavigationStore } from './vertical-navigation.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/vertical-navigation/vertical-navigation.component.ts
      </code>
      <ui-preview [code]="codePreview[0]"><ui-vertical-navigation></ui-vertical-navigation></ui-preview>
      <ui-preview [code]="codePreview[1]"
        ><ui-vertical-navigation [badges]="badges"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[2]"
        ><ui-vertical-navigation [icon]="icon" [badges]="badges"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[3]"><ui-vertical-navigation [icon]="icon"></ui-vertical-navigation></ui-preview>
      <ui-preview [code]="codePreview[4]"
        ><ui-vertical-navigation [icon]="icon" [secondaryNav]="secondaryNav"></ui-vertical-navigation
      ></ui-preview>
    </ng-container>
  `,
  providers: [VerticalNavigationStore],
})
export class VerticalNavigationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: VerticalNavigationStore) {}
  public icon = true
  public badges = true
  public secondaryNav = true
  public codePreview = [
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation' \n\n <ui-vertical-navigation></ui-vertical-navigation>`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n  <ui-vertical-navigation [badges]="badges"></ui-vertical-navigation> \n\n badges = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon" [badges]="badges"></ui-vertical-navigation> badges = true \n\n icon = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon"></ui-vertical-navigation> \n\n icon = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon" [secondaryNav]="secondaryNav"></ui-vertical-navigation> \n\n icon = true \n\n secondaryNav = true`,
  ]
}
