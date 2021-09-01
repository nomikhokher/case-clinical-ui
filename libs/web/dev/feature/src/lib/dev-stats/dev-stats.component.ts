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
        [codeObj]="vm.config.items"
      >
        <ui-stats
          [title]="vm.config.items.title"
          [values]="vm.config.items.values"
          [icon]="vm.config.items.icon"
          [link]="vm.config.items.link"
        ></ui-stats>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStatsStore],
})
export class DevStatsComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevStatsStore) {
    this.vm$.subscribe((x) => console.log(x.config.component_inputs))
  }

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiStatsModule } from '@schema-driven/web/ui/stats'\n\n
        <ui-stats 
          [title]="vm.config.items.title"
          [values]="vm.config.items.values"
          [icon]="vm.config.items.icon"
          [link]="vm.config.items.link"
        ></ui-stats>\n\n
        {
          title: ${JSON.stringify(result.config.items.title, null, '\t')}
          values: ${JSON.stringify(result.config.items.values, null, '\t')}
          icon: ${JSON.stringify(result.config.items.icon, null, '\t')}
          link: ${JSON.stringify(result.config.items.link, null, '\t')}
        }`,
      ]
    })
  }
}
