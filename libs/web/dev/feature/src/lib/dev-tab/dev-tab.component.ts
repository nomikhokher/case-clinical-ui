import { Component } from '@angular/core'
import { Tabs } from '@schema-driven/web/ui/tab'
import { DevTabsStore } from './dev-tab.store'

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
      >
        <ui-tab [tabs]="vm.config.tabs" [style]="vm.config.style" [alignment]="vm.config.alignment"></ui-tab>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTabsStore],
})
export class DevTabComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTabsStore) {}

  tabSelecteds(tab: Tabs, tabs: Tabs[]) {
    tabs.forEach((res) => {
      if (res.active == true) {
        res.active = false
      }
    })
    tab.active = true
  }
  public codePreview = [
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabs' [style]='style'></ui-tab> \n\n style= "underline" \n\n tabs = [
      {item : "My Account"},
      {item : "Company"},
      {item : "Team Member"},
      {item : "Billing"},
    ]`,
  ]
}
