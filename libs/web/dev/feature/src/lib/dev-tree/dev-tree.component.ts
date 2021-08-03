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
      >
        <!-- <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
          <pre class="text-xs dark:text-gray-500">{{ __usage() | json }}</pre>
        </div> -->
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

  constructor(private readonly store: DevTreeStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((treeData) => {
      this.treeData = treeData.config.items.treeData
      this.dataSource = new ArrayDataSource(treeData.config.items.treeData)
    })
  }

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
