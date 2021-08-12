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
        [code]="codePreview[0]"
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
  public codePreview = [
    `import { WebUiTimelineModule } from '@schema-driven/web/ui/timeline'\n\n
    <ui-timeline [timelines]="timelines"></ui-timeline\n
    timelines =  [
      {
        id: '1',
        timelineColor: 'bg-pink-500',
        icon: 'check',
        status: 'Package Booked',
        statusTitle: 'Customer cancelled the order',
      },
      {
        id: '2',
        timelineColor: 'bg-red-500',
        icon: 'x',
        status: 'Cancelled',
        statusTitle: 'Customer cancelled the order',
      },
      {
        id: '2',
        timelineColor: 'bg-gray-300',
        icon: 'information_circle',
        status: 'Delivered',
      },
    ],
    
    `,
  ]
}
