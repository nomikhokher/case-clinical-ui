import { Component } from '@angular/core'
import { DevPillsStore } from './dev-pills.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [code]="codePreview[0]"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-pills [pillsItems]="vm.config.items"></ui-pills>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPillsStore],
})
export class DevPillsComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevPillsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPillsModule } from '@schema-driven/web/ui/pills'\n\n
        <ui-pills [pillsItems]="vm.config.items.pills"></ui-pills>\n\n
        {
          pillsIems: ${JSON.stringify(result.config.items, null, '\t')}
        }`,
      ]
    })
  }
}
