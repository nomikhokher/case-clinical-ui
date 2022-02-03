import { Component } from '@angular/core'
import { DevSideNavBarStore } from './dev-side-nav-bar.store'

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
        <ui-side-nav-bar
          [menuItems]="vm.config.items.menuItems"
          [heading]="vm.config.items.heading"
          [background]="vm.config.items.background"
        ></ui-side-nav-bar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSideNavBarStore],
})
export class DevSideNavBarComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevSideNavBarStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiSideNavBarModule } from '@schema-driven/web/ui/side-nav-bar'\n\n
        <ui-side-nav-bar
          [menuItems]='menuItems'
          [heading]='heading'
        >
        </ui-side-nav-bar>\n\n
        {
          menuItems: ${JSON.stringify(result.config.items.menuItems, null, '\t')}
          quickAction:${JSON.stringify(result.config.items.heading, null, '\t')}
        }`,
      ]
    })
  }
}
