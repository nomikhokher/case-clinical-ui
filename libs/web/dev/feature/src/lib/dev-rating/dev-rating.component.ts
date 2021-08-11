import { Component } from '@angular/core'
import { DevRatingStore } from './dev-rating.store'

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
        <ui-rating [ratings]="vm.config.items.ratings"></ui-rating>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRatingStore],
})
export class DevRatingComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevRatingStore) {}
}
