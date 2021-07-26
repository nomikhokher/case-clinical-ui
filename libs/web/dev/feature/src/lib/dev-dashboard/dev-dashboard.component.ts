import { Component } from '@angular/core'
import { DevDashboardStore } from './dev-dashboard.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDashboardStore],
})
export class DevDashboardComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDashboardStore) {}
}
