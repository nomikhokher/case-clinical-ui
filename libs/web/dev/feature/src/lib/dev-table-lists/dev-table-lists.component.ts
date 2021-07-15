import { Component } from '@angular/core'
import { type } from 'os'
import { DevTableListsStore } from './dev-table-lists.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-table-lists/dev-table-lists.component.ts
      </code>
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-table-lists
          [columns]="vm.config.items.columns"
          [dataList]="vm.config.items.dataList"
          [width]="vm.config.items.width"
          [background]="vm.config.items.background"
        ></ui-table-lists>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTableListsStore],
})
export class DevTableListsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTableListsStore) {}

  public codePreview = [
    `import { WebUiTableListsModule } from '@schema-driven/web/ui/table-lists' \n\n 
      <ui-table-lists [columns]="columns" [dataList]="dataList" ></ui-table-lists> \n\ncolumns=[
        {title: 'Name'},
        {title: 'Title'},
        {title: 'Role'},
        {title: ''},
      ]\n\ndataList=[
        {
          title:{
              title: 'Jane Cooper',
              tagLine: 'jane.cooper@example.com',
            },
          
          jobTitle:{
              title: 'Regional Paradigm Technician',
              tagLine: 'Optimization',
            },
        
          role:'Admin',
          button: 'Delete',
        },
        {
          title:{
              title: 'Cody Fisher',
              tagLine: 'cody.fisher@example.com',
            },
          
          jobTitle:{
              title: 'Product Directives Officer',
              tagLine: 'Intranet',
            },
        
          role:'Owner',
          button: 'Edit',
        },
        {
          title:{
              title: 'Esther Howard',
              tagLine: 'esther.howard@example.com',
            },
          
          jobTitle:{
              title: 'Forward Response Developer',
              tagLine: 'Directives',
            },
        
          role:'Member',
          button: 'Edit',
        },
      ]\n\n width = "7xl"\n background = "indigo"
    `,
  ]
}
