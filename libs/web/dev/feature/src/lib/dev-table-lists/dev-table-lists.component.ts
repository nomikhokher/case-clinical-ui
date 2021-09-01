import { Component } from '@angular/core'
import { type } from 'os'
import { DevTableListsStore } from './dev-table-lists.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
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
  public codePreview
  constructor(private readonly store: DevTableListsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTableListsModule } from '@schema-driven/web/ui/table-lists' \n\n 
        <ui-table-lists 
          [columns]="vm.config.items.columns"
          [dataList]="vm.config.items.dataList"
          [width]="vm.config.items.width"
          [background]="vm.config.items.background"
        ></ui-table-lists> \n\n
        {
          columns: ${JSON.stringify(result.config.items.columns, null, '\t')}
          dataList: ${JSON.stringify(result.config.items.dataList, null, '\t')}
          width:${JSON.stringify(result.config.items.width, null, '\t')}
          background:${JSON.stringify(result.config.items.background, null, '\t')}
        }`,
      ]
    })
  }
}
