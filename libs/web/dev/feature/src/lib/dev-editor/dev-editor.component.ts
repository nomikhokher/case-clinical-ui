import { Component } from '@angular/core'
import { DevEditorStore } from './dev-editor.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- Component:  -->
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
      >
        <ui-editor></ui-editor>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevEditorStore],
})
export class DevEditorComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevEditorStore) {}
}
