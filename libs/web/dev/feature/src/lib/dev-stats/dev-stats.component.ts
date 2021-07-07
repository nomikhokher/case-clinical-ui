import { Component } from '@angular/core'
import { DevStatsStore } from './dev-stats.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="codePreview[0]"
      >
        <ui-stats [stats]="vm.config.items.stats"></ui-stats>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStatsStore],
})
export class DevStatsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStatsStore) {
    this.vm$.subscribe((x) => console.log(x.config.component_inputs))
  }

  public codePreview = [
    `import { WebUiStatsModule } from '@schema-driven/web/ui/stats'\n\n<ui-stats [stats]="vm.items.stats"></ui-stats>
}`,
  ]
}
