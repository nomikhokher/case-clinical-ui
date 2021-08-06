import { Component } from '@angular/core'
import { NavbarsStore } from './navbars.store'

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
        <ui-navbars
          [menuItems]="vm.config.items.menuItems"
          [optionList]="vm.config.items.optionList"
          [quickAction]="vm.config.items.quickAction"
          [background]="vm.config.items.background"
        ></ui-navbars>
      </ui-preview>
    </ng-container>
  `,
  providers: [NavbarsStore],
})
export class NavbarsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: NavbarsStore) {}
  public codePreview = [
    `import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'\n\n <ui-navbars [menuItems]='menuItems' [optionList]='optionList' [quickAction]='quickAction' ></ui-navbars>\n\n menuItems = [
      {menu : "Dashboard"},
      {menu : "Team"},
      {menu : "Project"},
      {menu : "Calendar"}
    ]\n\noptionList = [
      {item : 'Your Profile'},
      {item : 'Setting'},
      {item : 'Sign out'}
    ]\n\n quickAction = "search"\n background = "indigo"`,
  ]
}
