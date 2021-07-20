import { Component } from '@angular/core'
import { DevProgressBarStore } from './dev-progress-bar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-progress-bar> </ui-progress-bar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressBarStore],
})
export class DevProgressBarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProgressBarStore) {}
}
