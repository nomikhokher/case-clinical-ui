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
  public codePreview = [
    `import { WebUiPaginationModule } from '@schema-driven/web/ui/pagination'\n\n<ui-pagination [pages]="pages" [isPages]="isPages" [isPageSpan]="isPageSpan" [direction]="direction">
    </ui-pagination>\n\n direction = 'right' \n\n pages = 50 \n\n difference = 7`,
  ]
  public pages = 50
  public difference = 7
}
