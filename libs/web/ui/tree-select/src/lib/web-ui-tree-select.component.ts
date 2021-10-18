import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { ArrayDataSource } from '@angular/cdk/collections'
import { FlatTreeControl } from '@angular/cdk/tree'

@Component({
  selector: 'ui-tree-select',
  styles: [
    `
      [x-cloak] {
        display: none;
      }
      .svg-icon {
        width: 1em;
        height: 1em;
      }
      .svg-icon path,
      .svg-icon polygon,
      .svg-icon rect {
        fill: #333;
      }
      .svg-icon circle {
        stroke: #4691f6;
        stroke-width: 1;
      }
    `,
  ],
  template: `
    <div class="w-full md:w-1/2 flex flex-col h-auto">
      <input name="values" type="hidden" [value]="selectedValues()" />
      <div class="inline-block relative w-64">
        <div class="flex flex-col relative">
          <div class="w-full">
            <div class="my-2 p-1 flex border border-gray-200 bg-white rounded">
              <div class="flex flex-auto flex-wrap">
                <ng-container *ngFor="let option of selected; let i = index">
                  <div class="flex justify-center m-1 font-medium py-1 px-1 rounded bg-gray-100 border">
                    <div class="text-xs font-normal leading-none max-w-full flex-initial">
                      {{ options[option]?.text }}
                    </div>
                    <div class="flex flex-auto flex-row-reverse">
                      <div (click)="remove(i, option)">
                        <svg class="fill-current h-4 w-4 " role="button" viewBox="0 0 20 20">
                          <path
                            d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
                                           c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183
                                           l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
                                           C14.817,13.62,14.817,14.38,14.348,14.849z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ng-container>
                <div *ngIf="selected.length == 0" class="flex-1" (click)="show = !show">
                  <input
                    placeholder="Select a option"
                    class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                    [value]="selectedValues()"
                  />
                </div>
              </div>
              <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                <button
                  type="button"
                  (click)="show = !show"
                  *ngIf="show"
                  class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                >
                  <svg version="1.1" class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83
	c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25
	L17.418,6.109z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  (click)="show = !show"
                  *ngIf="!show"
                  class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                >
                  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83
	c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z
	"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full px-4">
            <div *ngIf="show" class="absolute shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select">
              <div class="flex flex-col w-full overflow-y-auto h-auto">
                <div class="cursor-pointer w-full border-gray-100 rounded-t border-b">
                  <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                    <div class="w-full items-center flex justify-between">
                      <div class="mx-2 leading-6">
                        <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
                          <cdk-tree-node
                            *cdkTreeNodeDef="let node"
                            cdkTreeNodePadding
                            [style.display]="shouldRender(node) ? 'flex' : 'none'"
                            class="example-tree-node dark:text-gray-800"
                            (click)="select(node.id, $event)"
                          >
                            <!-- use a disabled button to provide padding for tree leaf -->
                            <button mat-icon-button disabled></button>
                            <span class="text-sm dark:text-gray-800">{{ node.name }}</span>
                          </cdk-tree-node>
                          <!-- This is the tree node template for expandable nodes -->
                          <cdk-tree-node
                            *cdkTreeNodeDef="let node; when: hasChild"
                            cdkTreeNodePadding
                            [style.display]="shouldRender(node) ? 'flex' : 'none'"
                            class="example-tree-node dark:text-gray-800"
                          >
                            <button
                              mat-icon-button
                              cdkTreeNodeToggle
                              class="flex items-center focus:outline-none focus:border-0 focus:ring-0 dark:text-gray-800"
                              [attr.aria-label]="'Toggle ' + node.name"
                              (click)="node.isExpanded = !node.isExpanded"
                              [style.visibility]="
                                node.expandable === true || node.expandable == 'true' ? 'visible' : 'hidden'
                              "
                            >
                              <div class="h-6 w-6 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  [class.rotate-90]="treeControl.isExpanded(node)"
                                  class="h-3 w-3 transform transition duration-100 ease-linear  text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                              <span class="text-sm dark:text-gray-800">{{ node.name }}</span>
                            </button>
                          </cdk-tree-node>
                        </cdk-tree>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiTreeSelectComponent {
  @ViewChild('selects') _elementRef: ElementRef

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  )

  @Input() treeData: FlatNode[]
  @Input() dataSource: any

  options = []
  selected = []
  show = false

  ngAfterViewInit(): void {
    this.loadOptions()
  }

  open() {
    this.show = true
  }
  close() {
    this.show = false
  }
  select(index, event) {
    if (!this.options[index].selected) {
      this.options[index].selected = true
      this.options[index].element = event.target
      this.selected.push(index)
    } else {
      this.selected.splice(this.selected.lastIndexOf(index), 1)
      this.options[index].selected = false
    }
  }
  remove(index, option) {
    this.options[option].selected = false
    this.selected.splice(index, 1)
  }
  loadOptions() {
    const options = this.treeData
    for (let i = 0; i < options.length; i++) {
      this.options.push({
        value: options[i].name,
        text: options[i].name,
      })
    }
  }

  selectedValues() {
    return this.selected.map((option) => {
      return this.options[option].value
    })
  }

  hasChild = (_: number, node: FlatNode) => node.expandable

  getParentNode(node: FlatNode) {
    const nodeIndex = this.treeData.indexOf(node)

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (Number(this.treeData[i].level) === Number(node.level) - 1) {
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

interface FlatNode {
  id: number
  expandable: boolean
  name: string
  level: number
  isExpanded?: boolean
}
