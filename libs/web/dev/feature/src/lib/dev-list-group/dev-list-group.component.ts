import { Component } from '@angular/core'
import { DevListGroupStore } from './dev-list-group.store'

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
        <ui-list-group [tabsData]="vm.config.items.tabsData"></ui-list-group>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevListGroupStore],
})
export class DevListGroupComponent {
  public codePreview
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevListGroupStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUiListGroupModule } from '@schema-driven/web/ui/list-group'\n
        <ui-list-group [tabsData]="vm.config.items.tabsData"> </ui-list-group>\n\n
      `,
      ]
    })
  }
}
