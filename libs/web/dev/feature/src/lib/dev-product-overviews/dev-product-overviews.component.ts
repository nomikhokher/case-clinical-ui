import { Component } from '@angular/core'
import { DevProductOverviewsStore } from './dev-product-overviews.store'

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
        <ui-product-overviews [product]="vm.config.items.product"></ui-product-overviews>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductOverviewsStore],
})
export class DevProductOverviewsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProductOverviewsStore) {}
}
