import { Component } from '@angular/core'
import { DevTableStore } from './dev-table.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-6">
        <ng-container *ngFor="let demo of vm.demos">
          <ui-preview
            [title]="demo.label"
            [code]="codePreview[0]"
            [title]="vm.config.headerTitle"
            [githubURL]="vm.config.githubURL"
            [directory]="vm.config.directory"
            [breadcrumbs]="vm.config.breadcrumbs"
            [component_outputs]="vm.config.component_outputs"
            [component_inputs]="vm.config.component_inputs"
            [codeObj]="vm.config.items"
          >
            <ui-table [cols]="vm.config.items.cols" [data]="vm.config.items.data"></ui-table>
          </ui-preview>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [DevTableStore],
})
export class DevTableComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevTableStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTableModule } from '@schema-driven/web/ui/table'\n\n
        <ui-table 
          [cols]="vm.config.items.cols" 
          [data]="vm.config.items.data"
        ></ui-table>\n\n
        {
          cols: ${JSON.stringify(result.config.items.cols, null, '\t')}
          data: ${JSON.stringify(result.config.items.data, null, '\t')}
          quickAction:${JSON.stringify(result.config.items.quickAction, null, '\t')}
        }`,
      ]
    })
  }
}
