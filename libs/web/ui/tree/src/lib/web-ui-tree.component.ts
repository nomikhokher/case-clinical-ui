import { Component } from '@angular/core'
import { ArrayDataSource } from '@angular/cdk/collections'
import { FlatTreeControl } from '@angular/cdk/tree'

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean
  name: string
  level: number
  isExpanded?: boolean
}

const TREE_DATA: ExampleFlatNode[] = [
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
  selector: 'ui-tree',
  template: `
    <div>
      <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <cdk-tree-node
          *cdkTreeNodeDef="let node"
          cdkTreeNodePadding
          [style.display]="shouldRender(node) ? 'flex' : 'none'"
          class="example-tree-node"
        >
          <!-- use a disabled button to provide padding for tree leaf -->
          <button mat-icon-button disabled></button>
          {{ node.name }}
        </cdk-tree-node>
        <!-- This is the tree node template for expandable nodes -->
        <cdk-tree-node
          *cdkTreeNodeDef="let node; when: hasChild"
          cdkTreeNodePadding
          [style.display]="shouldRender(node) ? 'flex' : 'none'"
          class="example-tree-node"
        >
          <button
            mat-icon-button
            cdkTreeNodeToggle
            [attr.aria-label]="'Toggle ' + node.name"
            (click)="node.isExpanded = !node.isExpanded"
            [style.visibility]="node.expandable ? 'visible' : 'hidden'"
          >
            <mat-icon class="mat-icon-rtl-mirror">
              {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
            </mat-icon>
          </button>
          {{ node.name }}
        </cdk-tree-node>
      </cdk-tree>
    </div>
  `,
})
export class WebUiTreeComponent {
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  )

  dataSource = new ArrayDataSource(TREE_DATA)

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node)

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i]
      }
    }

    return null
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node)
    while (parent) {
      if (!parent.isExpanded) {
        return false
      }
      parent = this.getParentNode(parent)
    }
    return true
  }
}
