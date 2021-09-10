import { ArrayDataSource } from '@angular/cdk/collections'
import { Component } from '@angular/core'
import { DevTreeStore } from './dev-tree.store'
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
      >
        <div class="mb-4 mt-4 dark:text-gray-300">
          <ui-tree [treeData]="treeData" [dataSource]="dataSource"></ui-tree>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTreeStore],
})
export class DevTreeComponent {
  readonly vm$ = this.store.vm$

  public treeData: FlatNode[]
  public dataSource: any
  public codePreview
  constructor(private readonly store: DevTreeStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((treeData) => {
      this.treeData = treeData.config.items.treeData
      this.dataSource = new ArrayDataSource(treeData.config.items.treeData)
    })

    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTreeModule } from '@schema-driven/web/ui/tree'\n\n
        <ui-tree [treeData]="treeData" [dataSource]="dataSource"></ui-tree>\n
        dataSource = new ArrayDataSource(treeData.config.items.treeData)
        {
          treeData: ${JSON.stringify(result.config.items.treeData, null, '\t')}
        }`,
      ]
    })
  }
}
