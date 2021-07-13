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
        [component_inputs]="vm.component_inputs"
      >
        <ui-section-headings
          [title]="vm.items.title"
          [description]="vm.items.description"
          [image]="vm.items.image"
          [tabs]="vm.items.tabs"
          [buttons]="vm.items.buttons"
          [badge]="vm.items.badge"
        ></ui-section-headings>
      </ui-preview>
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
