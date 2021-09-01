import { Component } from '@angular/core'
import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [githubURL]="vm.githubURL"
        [component_inputs]="vm.component_inputs"
        [codeObj]="vm.items"
        [code]="codePreview[0]"
      >
        <ui-vertical-navigation [links]="vm.items.links"></ui-vertical-navigation
      ></ui-preview>
    </ng-container>
  `,
  providers: [DevVerticalNavigationStore],
})
export class DevVerticalNavigationComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevVerticalNavigationStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'\n\n
        <ui-vertical-navigation [links]="links"></ui-vertical-navigation\n
        {
          links: ${JSON.stringify(result.items.links, null, '\t')}
        }`,
      ]
    })
  }
}
