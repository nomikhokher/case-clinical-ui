import { Component } from '@angular/core'
import { DevUploadStore } from './dev-upload.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-upload></ui-upload>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevUploadStore],
})
export class DevUploadComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevUploadStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiUploadModule } from '@schema-driven/web/ui/upload' \n\n<ui-upload ></ui-upload>`,
      ]
    })
  }
}
