import { Component } from '@angular/core'
import { Tabs } from '@schema-driven/web/ui/tab'
import { DevTabsStore } from './dev-tab.store'

@Component({
  template: `
    <ui-preview [code]="codePreview[0]">
      <ui-tab [tabs]="tabs" [style]="style" [alignment]="alignment"></ui-tab>
    </ui-preview>
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
  public tabs = [
    { item: 'My Account', path: '/dev/tabs' },
    { item: 'Company', path: '/dev/tabs' },
    { item: 'Team Member', path: '/dev/tabs' },
    { item: 'Billing', path: '/dev/tabs' },
  ]
  public tabswithBadges = [
    { item: 'My Account', badge: '4' },
    { item: 'Company' },
    { item: 'Team Member', badge: '12' },
    { item: 'Billing', badge: '3' },
  ]
  public tabsWithIcons = [
    { item: 'My Account', icon: 'user' },
    { item: 'Company', icon: 'office' },
    { item: 'Team Member', icon: 'team' },
    { item: 'Billing', icon: 'credit' },
  ]
  public style = 'underline'
  public alignment = 'right' //alignment can be [center, right, left, full]
}
