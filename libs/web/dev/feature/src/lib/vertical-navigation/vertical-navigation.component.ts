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
      <ui-preview [code]="codePreview[0]"
        ><ui-vertical-navigation [menuItems]="simpleMenu"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[1]"
        ><ui-vertical-navigation [menuItems]="withBadges"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[2]"
        ><ui-vertical-navigation [menuItems]="withIcons"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[3]"
        ><ui-vertical-navigation [menuItems]="withIconsandBadges"></ui-vertical-navigation
      ></ui-preview>
      <ui-preview [code]="codePreview[4]"
        ><ui-vertical-navigation [menuItems]="withIcons" [secondaryNav]="secondaryNav"></ui-vertical-navigation
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
  public codePreview = [
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation' \n\n <ui-vertical-navigation></ui-vertical-navigation>`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n  <ui-vertical-navigation [badges]="badges"></ui-vertical-navigation> \n\n badges = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon" [badges]="badges"></ui-vertical-navigation> badges = true \n\n icon = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon"></ui-vertical-navigation> \n\n icon = true`,
    `import {WebUiVerticalNavigationModule} from '@schema-driven/web/ui/vertical-navigation'\n\n <ui-vertical-navigation [icon]="icon" [secondaryNav]="secondaryNav"></ui-vertical-navigation> \n\n icon = true \n\n secondaryNav = true`,
  ]
  public withBadges = [
    { item: 'Dashboard', badge: 5 },
    { item: 'Team', badge: 12 },
    { item: 'Projects' },
    { item: 'Calendar' },
    { item: 'Document' },
    { item: 'Report', badge: 20 },
  ]
  public simpleMenu = [
    { item: 'Dashboard' },
    { item: 'Team' },
    { item: 'Projects' },
    { item: 'Calendar' },
    { item: 'Document' },
    { item: 'Report' },
  ]
  public withIcons = [
    {
      item: 'Dashboard',
      icon: 'home',
    },
    {
      item: 'Team',
      icon: 'team',
    },
    { item: 'Projects', icon: 'project' },
    {
      item: 'Calendar',
      icon: 'calendar',
    },
    {
      item: 'Document',
      icon: 'document',
    },
    {
      item: 'Report',
      icon: 'report',
    },
  ]
  public withIconsandBadges = [
    {
      badge: '9',
      item: 'Dashboard',
      icon: 'home',
    },
    {
      badge: '15',
      item: 'Team',
      icon: 'team',
    },
    { item: 'Projects', icon: 'project' },
    {
      badge: `20+`,
      item: 'Calendar',
      icon: 'calendar',
    },
    {
      item: 'Document',
      icon: 'document',
    },
    {
      item: 'Report',
      icon: 'report',
    },
  ]

  public secondaryNav = [
    { menu: 'Website Redesign' },
    { menu: 'GraphQL API' },
    { menu: 'Customer migration guides' },
    { menu: 'Profit sharing program' },
  ]
}
