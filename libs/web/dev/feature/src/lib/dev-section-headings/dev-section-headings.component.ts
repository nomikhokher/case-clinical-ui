import { Component } from '@angular/core'
import { DevSectionHeadingsStore } from './dev-section-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [code]="codePreview[0]"
      >
        <ui-section-headings
          [heading]="vm.items.heading"
          [tabs]="vm.items.tabs"
          [buttons]="vm.items.buttons"
        ></ui-section-headings>
      </ui-preview>
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
    </ng-container>
  `,
  providers: [DevSectionHeadingsStore],
})
export class DevSectionHeadingsComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevSectionHeadingsStore) {}

  public codePreview = [
    `import { WebUiSectionHeadingsModule } from '@schema-driven/web/ui/section-headings' \n\n 
    <ui-section-headings
    [heading]="vm.items.heading"
    [tabs]="vm.items.tabs"
    [buttons]="vm.items.buttons"
  ></ui-section-headings>
   
  `,
  ]
}
