import { Component } from '@angular/core'
import { DevTabsStore } from './dev-tab.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex space-x-6">
        <ng-container>
          <ui-tab [demos]="vm.demos"></ui-tab>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [DevTabsStore],
})
export class DevTabComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTabsStore) {}
}
