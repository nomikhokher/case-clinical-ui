import { Component } from '@angular/core'
import { DevMobileSearchAllStore } from './dev-mobile-search-all.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="vm.componentProps"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-mobile-search-all></ui-mobile-search-all>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchAllStore],
})
export class DevMobileSearchAllComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchAllStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileSearchAllModule } from \n'@schema-driven/web/ui/mobile-search-all' \n
<ui-mobile-search-all></ui-mobile-search-all>
         \n\n
        `,
      ]
    })
  }
}
