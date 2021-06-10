import { ArrayDataSource } from '@angular/cdk/collections'
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
import { FlatNode } from '@schema-driven/web/ui/tree'
import { DevTreeStore } from './dev-tree.store'

const TREE_DATA: FlatNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 1,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 1,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 1,
  },
  {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  },
  {
    name: 'Green',
    expandable: true,
    level: 1,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 2,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 2,
  },
  {
    name: 'Orange',
    expandable: true,
    level: 1,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 2,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 2,
  },
]

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ __usage() | json }}</pre>
      </div>
      <div class="mb-4 mt-4">
        <ui-tree [treeData]="treeData" [dataSource]="dataSource"></ui-tree>
      </div>
    </ng-container>
  `,
  providers: [DevTreeStore],
})
export class DevTreeComponent {
  readonly vm$ = this.store.vm$

  treeData = TREE_DATA
  dataSource = new ArrayDataSource(TREE_DATA)

  constructor(private readonly store: DevTreeStore) {}

  __usage() {
    return {
      component: 'ui-tree',
      parameters: {
        show: 'boolean',
        class: 'string',
        subject: 'string',
        message: 'string',
        list: 'string []',
        actionLink: 'Object []',
        type: 'string',
        bg_color: 'string',
        dismiss: 'boolean',
        icon_show: 'boolean',
      },
    }
  }
}
