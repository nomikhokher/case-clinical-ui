import { Component } from '@angular/core'
import { DevTimelineStore } from './dev-timeline.store'

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
        <ui-timeline [timelines]="vm.config.items.timelines"></ui-timeline>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTimelineStore],
})
export class DevTimelineComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTimelineStore) {}
}
