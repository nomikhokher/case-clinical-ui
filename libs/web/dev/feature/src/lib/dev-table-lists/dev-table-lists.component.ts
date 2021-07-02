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
      <ui-preview [code]="codePreview[0]">
        <ui-table-lists
          [columns]="columns"
          [dataList]="dataList"
          [width]="width"
          [background]="background"
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
      ]
    `,
  ]
  public width = '7xl' //width can be [xs, sm , md , lg, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl]
  public background = 'indigo'
  public columns: Columns[] = [{ title: 'Name' }, { title: 'Title' }, { title: 'Role' }, { title: '' }]

  public dataList: Data[] = [
    {
      title: {
        title: 'Jane Cooper',
        tagLine: 'jane.cooper@example.com',
      },

      jobTitle: {
        title: 'Regional Paradigm Technician',
        tagLine: 'Optimization',
      },

      role: 'Admin',
      button: 'Delete',
    },
    {
      title: {
        title: 'Cody Fisher',
        tagLine: 'cody.fisher@example.com',
      },

      jobTitle: {
        title: 'Product Directives Officer',
        tagLine: 'Intranet',
      },

      role: 'Owner',
      button: 'Edit',
    },
    {
      title: {
        title: 'Esther Howard',
        tagLine: 'esther.howard@example.com',
      },

      jobTitle: {
        title: 'Forward Response Developer',
        tagLine: 'Directives',
      },

      role: 'Member',
      button: 'Edit',
    },
  ]
}

export type Columns = { title: string }

export type Data = { title: {}; jobTitle?: {}; status?: string; role?: string; button: string }
