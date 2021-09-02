import { Component } from '@angular/core'
import { DevBreadcrumbsStore } from './dev-breadcrumbs.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [component_props]="[{ name: 'crumbs', value: vm.crumbs }]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [component_outputs]="vm.config.component_outputs"
        [codeObj]="vm.config.items"
      >
        <ui-breadcrumbs [crumbs]="vm.config.items.crumbs" [alignment]="vm.config.items.alignment"></ui-breadcrumbs>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBreadcrumbsStore],
})
export class DevBreadcrumbsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBreadcrumbsStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'
        \n\n
        <ui-breadcrumbs [crumbs]="vm.config.items.crumbs" [alignment]="vm.config.items.alignment"></ui-breadcrumbs> \n\n
      crumbs = ${JSON.stringify(result.config.items.crumbs, null, '\t')}\n
      alignment = ${JSON.stringify(result.config.items.alignment, null, '\t')}\n
      `,
      ]
    })
  }
}
