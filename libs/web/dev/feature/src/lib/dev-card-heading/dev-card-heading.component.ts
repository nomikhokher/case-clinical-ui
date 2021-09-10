import { Component } from '@angular/core'
import { DevCardHeadingStore } from './dev-card-heading.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_outputs]="vm.component_outputs"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-card-heading
          [sectionToggle]="vm.items.sectionToggle"
          [profile]="vm.items.profile"
          [buttons]="vm.items.buttons"
        ></ui-card-heading>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCardHeadingStore],
})
export class DevCardHeadingComponent {
  readonly vm$ = this.store.vm$

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiCardHeadingModule } from '@schema-driven/web/ui/card-heading'
        \n\n
        <ui-card-heading
          [sectionToggle]="vm.items.sectionToggle"
          [profile]="vm.items.profile"
          [buttons]="vm.items.buttons"
        ></ui-card-heading> \n\n
        sectionToggle = ${JSON.stringify(result.items.sectionToggle, null, '\t')}\n
      profile = ${JSON.stringify(result.items.profile, null, '\t')}\n
      buttons = ${JSON.stringify(result.items.buttons, null, '\t')}\n
      `,
      ]
    })
  }

  constructor(private readonly store: DevCardHeadingStore) {}
}
