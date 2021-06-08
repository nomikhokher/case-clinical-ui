import { Component } from '@angular/core'
import { DevBreadcrumbsStore } from './dev-breadcrumbs.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview [component_props]="[{ name: 'crumbs', value: vm.crumbs }]" [code]="codePreview[0]">
        <ui-breadcrumbs [crumbs]="vm.crumbs"></ui-breadcrumbs>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBreadcrumbsStore],
})
export class DevBreadcrumbsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBreadcrumbsStore) {}
  public codePreview = [`<ui-breadcrumbs [crumbs]="vm.crumbs"></ui-breadcrumbs>`]
}
