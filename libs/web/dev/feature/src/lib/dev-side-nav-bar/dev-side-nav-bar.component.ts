import { Component } from '@angular/core'
import { DevSideNavBarStore } from './dev-side-nav-bar.store'

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
        <ui-side-nav-bar
          [menuItems]="vm.config.items.menuItems"
          [optionList]="vm.config.items.optionList"
          [quickAction]="vm.config.items.quickAction"
          [background]="vm.config.items.background"
        ></ui-side-nav-bar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSideNavBarStore],
})
export class DevSideNavBarComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevSideNavBarStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiSideNavBarModule } from '@schema-driven/web/ui/side-nav-bar'\n\n
        <ui-side-nav-bar
          [menuItems]='menuItems'
          [optionList]='optionList'
          [quickAction]='quickAction'
        >
        </ui-side-nav-bar>\n\n
        {
          menuItems: ${JSON.stringify(result.config.items.menuItems, null, '\t')}
          optionList: ${JSON.stringify(result.config.items.optionList, null, '\t')}
          quickAction:${JSON.stringify(result.config.items.quickAction, null, '\t')}
        }`,
      ]
    })
  }
}
