import { Component } from '@angular/core'
import { DevLayoutStore } from './dev-layout.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <ui-layout sidebarTitle="HELLO SIDEBAR TITLE"></ui-layout>
        <ui-code [code]="vm.items | json"></ui-code>
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
    </ng-container>
  `,
  providers: [DevLayoutStore],
})
export class DevLayoutComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevLayoutStore) {}
}
