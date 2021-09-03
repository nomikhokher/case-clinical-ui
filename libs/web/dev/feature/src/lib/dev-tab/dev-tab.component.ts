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
        [codeObj]="vm.config.items"
      >
        <ui-tab
          [tabs]="vm.config.items.tabs"
          [style]="vm.config.items.style"
          [alignment]="vm.config.items.alignment"
        ></ui-tab>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTabsStore],
})
export class DevTabComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTabsStore) {}

  tabSelecteds(tab: Tabs, tabs: Tabs[]) {
    tabs.forEach((res) => {
      if (res.active == true) {
        res.active = false
      }
    })
    tab.active = true
  }

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n
        <ui-tab 
        [tabs]="vm.config.items.tabs"
        [style]="vm.config.items.style"
        [alignment]="vm.config.items.alignment"
        >
        </ui-tab>\n\n
        {
          tabs: ${JSON.stringify(result.config.items.tabs, null, '\t')}
          style: ${JSON.stringify(result.config.items.style, null, '\t')}
          alignment:${JSON.stringify(result.config.items.alignment, null, '\t')}
        }`,
      ]
    })
  }
}
