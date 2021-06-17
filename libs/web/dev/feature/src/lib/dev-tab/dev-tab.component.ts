import { Component } from '@angular/core'
import { Tabs } from '@schema-driven/web/ui/tab'
import { DevTabsStore } from './dev-tab.store'

@Component({
  template: `
    <ui-preview [code]="codePreview[0]">
      <ui-tab [tabs]="tabs" [style]="style"></ui-tab>
    </ui-preview>
    <ui-preview [code]="codePreview[1]">
      <ui-tab [tabs]="tabsWithIcons" [style]="style"></ui-tab>
    </ui-preview>
    <ui-preview [code]="codePreview[2]">
      <ui-tab [tabs]="tabswithBadges" [style]="style"></ui-tab>
    </ui-preview>
    <ui-preview [code]="codePreview[3]">
      <ui-tab [tabs]="tabs1" [style]="'pills'"></ui-tab>
    </ui-preview>
    <ui-preview [code]="codePreview[4]">
      <ui-tab [tabs]="tabs2" [style]="'full-underline'"></ui-tab>
    </ui-preview>
    <ui-preview [code]="codePreview[5]">
      <ui-tab [tabs]="tabs3" [style]="'bar-underline'"></ui-tab>
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
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabsWithIcons' [style]='style'></ui-tab> \n\n  style= "underline" \n\n tabsWithIcons = [
      {item : "My Account", icon : "user"},
      {item : "Company", icon : "office"},
      {item : "Team Member", icon : "team"},
      {item : "Billing", icon : "credit"},
    ]`,
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabswithBadges' [style]='style'></ui-tab> \n\n  style= "underline" \n\n tabswithBadges = [
      {item : "My Account", badge : '4'},
      {item : "Company"},
      {item : "Team Member" , badge : '12'},
      {item : "Billing" , badge : '3'},
    ]`,
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabs' [style]='style'></ui-tab> \n\n  style= "pills" \n\n tabs = [
      {item : "My Account"},
      {item : "Company"},
      {item : "Team Member"},
      {item : "Billing"},
    ]`,
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabs' [style]='style'></ui-tab> \n\n  style= "full-underline" \n\n tabs = [
      {item : "My Account"},
      {item : "Company"},
      {item : "Team Member"},
      {item : "Billing"},
    ]`,
    `import { WebUiTabModule } from '@schema-driven/web/ui/tab' \n\n <ui-tab [tabs]='tabs' [style]='style'></ui-tab> \n\n style= "bar-underline" \n\n tabs = [
      {item : "My Account"},
      {item : "Company"},
      {item : "Team Member"},
      {item : "Billing"},
    ]`,
  ]
  public tabs = [{ item: 'My Account' }, { item: 'Company' }, { item: 'Team Member' }, { item: 'Billing' }]
  public tabs1 = [{ item: 'My Account' }, { item: 'Company' }, { item: 'Team Member' }, { item: 'Billing' }]
  public tabs2 = [{ item: 'My Account' }, { item: 'Company' }, { item: 'Team Member' }, { item: 'Billing' }]
  public tabs3 = [{ item: 'My Account' }, { item: 'Company' }, { item: 'Team Member' }, { item: 'Billing' }]
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
}
