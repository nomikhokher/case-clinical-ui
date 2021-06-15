import { Component } from '@angular/core'
import { NavbarsStore } from './navbars.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/navbars/navbars.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-navbars [menuItems]="menuItems" [iconList]="iconList" [singleNav]="singleNav"></ui-navbars>
      </ui-preview>
      <ui-preview [code]="codePreview[1]">
        <ui-navbars
          [menuItems]="menuItems"
          [iconList]="iconList"
          [singleNav]="singleNav"
          [quickAction]="quickAction"
        ></ui-navbars>
      </ui-preview>
      <ui-preview [code]="codePreview[2]">
        <ui-navbars
          [menuItems]="menuItems"
          [iconList]="iconList"
          [singleNav]="singleNav"
          [searchBar]="searchBar"
        ></ui-navbars>
      </ui-preview>
      <ui-preview [code]="codePreview[3]">
        <ui-navbars [menuItems]="menuItems" [iconList]="iconList" [doubleNav]="doubleNav"></ui-navbars>
      </ui-preview>
      <ui-preview [code]="codePreview[4]">
        <ui-navbars [menuItems]="menuItems" [iconList]="iconList" [centerSearchNav]="centerSearchNav"></ui-navbars>
      </ui-preview>
    </ng-container>
  `,
  providers: [NavbarsStore],
})
export class NavbarsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: NavbarsStore) {}
  public menuItems = [{ menu: 'Dashboard' }, { menu: 'Team' }, { menu: 'Project' }, { menu: 'Calendar' }]
  public iconList = [{ item: 'Your Profile' }, { item: 'Setting' }, { item: 'Sign out' }]
  public singleNav = true
  public doubleNav = true
  public centerSearchNav = true
  public searchBar = true
  public quickAction = true
  public codePreview = [
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [iconList]='iconList' [singleNav]='singleNav' ></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\niconList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n singleNav = true`,
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [iconList]='iconList' [singleNav]='singleNav' [quickAction]='quickAction'></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\niconList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n singleNav = true\n\n quickAction=true`,
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [iconList]='iconList' [singleNav]='singleNav' [searchBar]='searchBar'></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\niconList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n singleNav = true \n\n searchBar = true`,
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [iconList]='iconList' [doubleNav]='doubleNav'></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\niconList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n doubleNav = true`,
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [iconList]='iconList' [centerSearchNav]='centerSearchNav'></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\niconList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n centerSearchNav = true`,
  ]
}
