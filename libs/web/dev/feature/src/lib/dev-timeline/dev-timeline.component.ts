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
  public codePreview
  constructor(private readonly store: DevTimelineStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTimelineModule } from '@schema-driven/web/ui/timeline'\n\n
        <ui-timeline [timelines]="timelines"></ui-timeline\n
        {
          timelines: ${JSON.stringify(result.config.items.timelines, null, '\t')}
        }`,
      ]
    })
  }
}
