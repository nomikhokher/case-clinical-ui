import { Component } from '@angular/core'
import { DevFolderOptionsStore } from './dev-folder-options.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-folder-options
          [width]="vm.config.items.width"
          [download]="vm.config.items.download"
          [folder]="vm.config.items.folder"
        ></ui-folder-options>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFolderOptionsStore],
})
export class DevFolderOptionsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFolderOptionsStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFolderOptionsModule} from '@schema-driven/web/ui/folder-options'
        \n\n
        <ui-folder-options [download]="vm.config.items.download" [folder]="vm.config.items.folder"></ui-folder-options>
     \n\n
        download = ${JSON.stringify(result.config.items.download, null, '\t')}\n
        folder = ${JSON.stringify(result.config.items.folder, null, '\t')}\n
        width = ${JSON.stringify(result.config.items.width, null, '\t')}\n
      `,
      ]
    })
  }
}
