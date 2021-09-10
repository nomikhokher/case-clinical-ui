import { Component } from '@angular/core'
import { DevEditorStore } from './dev-editor.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- Component:  -->
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
      >
        <ui-editor
          [froalaOptions]="vm.config.items.froalaData.froalaOptions"
          [modelData]="vm.config.items.froalaData.firstModel"
        ></ui-editor>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevEditorStore],
})
export class DevEditorComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevEditorStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiEditorModule } from '@schema-driven/web/ui/editor'
        \n\n
        <ui-editor
          [froalaOptions]="vm.config.items.froalaData.froalaOptions"
          [modelData]="vm.config.items.froalaData.firstModel"
        ></ui-editor>
        \n\n
        froalaOptions = ${JSON.stringify(result.config.items.froalaData.froalaOptions, null, '\t')}\n
        firstModel = ${JSON.stringify(result.config.items.froalaData.firstModel, null, '\t')}\n
      `,
      ]
    })
  }
}
