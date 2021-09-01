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
        [codeObj]="vm.items"
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
  public codePreview

  constructor(private readonly store: DevSectionHeadingsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiSectionHeadingsModule } from '@schema-driven/web/ui/section-headings' \n\n 
        <ui-section-headings
          [heading]="vm.items.heading"
          [tabs]="vm.items.tabs"
          [buttons]="vm.items.buttons"
        ></ui-section-headings>\n\n
        {
          heading: ${JSON.stringify(result.items.heading, null, '\t')}
          tabs: ${JSON.stringify(result.items.tabs, null, '\t')}
          buttons:${JSON.stringify(result.items.buttons, null, '\t')}
        }`,
      ]
    })
  }
}
