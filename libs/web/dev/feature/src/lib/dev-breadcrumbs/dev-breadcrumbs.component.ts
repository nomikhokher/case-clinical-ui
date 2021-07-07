import { Component } from '@angular/core'
import { DevBreadcrumbsStore } from './dev-breadcrumbs.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview [component_props]="[{ name: 'crumbs', value: vm.crumbs }]" [code]="codePreview[0]">
        <ui-breadcrumbs [crumbs]="vm.crumbs" [alignment]="vm.alignment"></ui-breadcrumbs>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBreadcrumbsStore],
})
export class DevBreadcrumbsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBreadcrumbsStore) {}
  public codePreview = [
    `import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'\n\n<ui-breadcrumbs [crumbs]="vm.crumbs"></ui-breadcrumbs>\n\n readonly vm$ = this.store.vm$`,
  ]
}
