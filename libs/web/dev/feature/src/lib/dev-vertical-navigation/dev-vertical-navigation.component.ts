import { Component } from '@angular/core'
import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [githubURL]="vm.githubURL"
        [component_inputs]="vm.component_inputs"
        [codeObj]="vm.items"
      >
        <ui-vertical-navigation [links]="vm.items.links"></ui-vertical-navigation
      ></ui-preview>
    </ng-container>
  `,
  providers: [DevVerticalNavigationStore],
})
export class DevVerticalNavigationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevVerticalNavigationStore) {}
}
