import { Component } from '@angular/core'
import { DevMultipleAlertStore } from './dev-multiple-alert.store'

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
        <ui-multiple-alert [tabsData]="vm.config.items.tabsData"> </ui-multiple-alert>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMultipleAlertStore],
})
export class DevMultipleAlertComponent {
  public codePreview
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMultipleAlertStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUiMultipleAlertModule } from '@schema-driven/web/ui/multiple-alert'\n
        <ui-multiple-alert [tabsData]="vm.config.items.tabsData"> </ui-multiple-alert>\n\n
      `,
      ]
    })
  }
}
