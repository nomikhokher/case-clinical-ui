import { ArrayDataSource } from '@angular/cdk/collections'
import { Component } from '@angular/core'
import { DevTreeSelectStore } from './dev-tree-select.store'
import { FlatNode } from './model'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-tree-select [treeData]="treeData" [dataSource]="dataSource"></ui-tree-select>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTreeSelectStore],
})
export class DevTreeSelectComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTreeSelectStore) {}

  public treeData: FlatNode[]
  public dataSource: any

  ngOnInit(): void {
    this.vm$.subscribe((treeData) => {
      this.treeData = treeData.config.items.treeData
      this.dataSource = new ArrayDataSource(treeData.config.items.treeData)
    })

    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTreeSelectModule } from '@schema-driven/web/ui/tree-select'\n\n
        <ui-tree-select [treeData]="treeData" [dataSource]="dataSource"></ui-tree-select>\n
        dataSource = new ArrayDataSource(treeData.config.items.treeData)
        {
          treeData: ${JSON.stringify(result.config.items.treeData, null, '\t')}
        }`,
      ]
    })
  }
}
