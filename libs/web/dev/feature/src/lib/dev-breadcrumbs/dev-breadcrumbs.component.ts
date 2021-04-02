import { Component } from '@angular/core'
import { DevBreadcrumbsStore } from './dev-breadcrumbs.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex space-x-6">
        <ng-container>
          <ui-breadcrumbs [crumbs]="vm.crumbs"></ui-breadcrumbs>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [DevBreadcrumbsStore],
})
export class DevBreadcrumbsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBreadcrumbsStore) {}
}
