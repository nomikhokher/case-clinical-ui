import { Component } from '@angular/core'
import { DevIncentivesStore } from './dev-incentives.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-incentives
          [incentives]="vm.config.items.incentives"
          [orderAttributes]="vm.config.items.orderAttributes"
        ></ui-incentives>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevIncentivesStore],
})
export class DevIncentivesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevIncentivesStore) {}
}
