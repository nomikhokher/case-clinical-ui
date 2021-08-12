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
  constructor(private readonly store: DevTreeSelectStore) {}

  public treeData: FlatNode[]
  public dataSource: any

  ngOnInit(): void {
    this.vm$.subscribe((treeData) => {
      this.treeData = treeData.config.items.treeData
      this.dataSource = new ArrayDataSource(treeData.config.items.treeData)
    })
  }
  public codePreview = [
    `import { WebUiTreeSelectModule } from '@schema-driven/web/ui/tree-select'\n\n
    <ui-tree-select [treeData]="treeData" [dataSource]="dataSource"></ui-tree-select>\n
    dataSource = new ArrayDataSource(treeData.config.items.treeData)
    treeData =  [
      {
        id: 0,
        name: 'Fruit',
        expandable: true,
        level: 0,
      },
      {
        id: 1,
        name: 'Apple',
        expandable: false,
        level: 1,
      },
      {
        id: 2,
        name: 'Banana',
        expandable: false,
        level: 1,
      },
      {
        id: 3,
        name: 'Fruit loops',
        expandable: false,
        level: 1,
      },
      {
        id: 4,
        name: 'Vegetables',
        expandable: true,
        level: 0,
      },
      {
        id: 5,
        name: 'Green',
        expandable: true,
        level: 1,
      },
      {
        id: 6,
        name: 'Broccoli',
        expandable: false,
        level: 2,
      },
      {
        id: 7,
        name: 'Brussels sprouts',
        expandable: false,
        level: 2,
      },
      {
        id: 8,
        name: 'Orange',
        expandable: true,
        level: 1,
      },
      {
        id: 9,
        name: 'Pumpkins',
        expandable: false,
        level: 2,
      },
      {
        id: 10,
        name: 'Carrots',
        expandable: false,
        level: 2,
      },
    ],
    `,
  ]
}
