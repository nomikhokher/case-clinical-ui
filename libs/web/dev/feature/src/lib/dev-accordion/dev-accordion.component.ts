import { Component } from '@angular/core'
import { DevAccordionStore } from './dev-accordion.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-accordion [accordions]="vm.config.items.accordions"></ui-accordion>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevAccordionStore],
})
export class DevAccordionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAccordionStore) {}
}
