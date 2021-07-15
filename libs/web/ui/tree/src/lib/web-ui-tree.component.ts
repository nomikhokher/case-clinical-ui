import { Component, Input, OnChanges } from '@angular/core'
import { ArrayDataSource } from '@angular/cdk/collections'
import { FlatTreeControl } from '@angular/cdk/tree'
import { FlatNode } from '../../../../dev/feature/src/lib/dev-tree/model'
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
          <span class="text-sm">{{ node.name }}</span>
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
            class="flex items-center"
            [attr.aria-label]="'Toggle ' + node.name"
            (click)="node.isExpanded = !node.isExpanded"
            [style.visibility]="node.expandable ? 'visible' : 'hidden'"
          >
            <!-- <mat-icon class="mat-icon-rtl-mirror">
              {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
            </mat-icon> -->
            <div class="h-6 w-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                [class.rotate-90]="treeControl.isExpanded(node)"
                class="h-3 w-3 transform transition duration-100 ease-linear  text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span class="text-sm">{{ node.name }}</span>
          </button>
        </cdk-tree-node>
      </cdk-tree>
    </div>
  `,
})
export class WebUiTreeComponent implements OnChanges {
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  )

  @Input() treeData: FlatNode[]
  @Input() dataSource: ArrayDataSource<FlatNode>

  ngOnChanges() {
    // new ArrayDataSource(TREE_DATA)
  }

  hasChild = (_: number, node: FlatNode) => node.expandable

  getParentNode(node: FlatNode) {
    const nodeIndex = this.treeData.indexOf(node)

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.treeData[i].level === node.level - 1) {
        return this.treeData[i]
      }
    }

    return null
  }

  shouldRender(node: FlatNode) {
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
