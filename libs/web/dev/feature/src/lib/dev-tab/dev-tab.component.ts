import { Component } from '@angular/core'
import { Tabs } from '@schema-driven/web/ui/tab'
import { DevTabsStore } from './dev-tab.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex space-x-6">
        <ng-container>
          <div class="flex-1 space-y-1">
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="1"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="2"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="3"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="4"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="5"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="6"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="7"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
            <br />
            <ui-tab
              [options]="vm.tabOptions"
              [active]="1"
              [styleType]="8"
              (tabSelected)="tabSelecteds($event[0], $event[1])"
            ></ui-tab>
          </div>
        </ng-container>
      </div>
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
}
