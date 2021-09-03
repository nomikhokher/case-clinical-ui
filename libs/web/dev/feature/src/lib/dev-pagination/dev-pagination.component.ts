import { Component } from '@angular/core'
import { DevPaginationStore } from './dev-pagination.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-pagination [pages]="vm.config.items.pages" [difference]="vm.config.items.difference"> </ui-pagination>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPaginationStore],
})
export class DevPaginationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPaginationStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPaginationModule } from '@schema-driven/web/ui/pagination'\n\n 
        <ui-pagination [pages]="vm.config.items.pages" [difference]="vm.config.items.difference"> </ui-pagination> \n\n
      
        pages = ${JSON.stringify(result.config.items.pages, null, '\t')}\n
        differnce = ${JSON.stringify(result.config.items.difference, null, '\t')}\n
        `,
      ]
    })
  }
}
