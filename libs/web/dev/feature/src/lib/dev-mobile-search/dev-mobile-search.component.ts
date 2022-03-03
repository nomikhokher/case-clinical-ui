import { Component } from '@angular/core'
import { DevMobileSearchStore } from './dev-mobile-search.store'

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
        <ui-mobile-search></ui-mobile-search>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchStore],
})
export class DevMobileSearchComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileSearchModule } from \n'@schema-driven/web/ui/mobile-search' \n
<ui-mobile-search></ui-mobile-search>
         \n\n
        `,
      ]
    })
  }
}
