import { Component } from '@angular/core'
import { DevMobileSearchCreatorStore } from './dev-mobile-search-creator.store'

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
        <ui-mobile-search-creator></ui-mobile-search-creator>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchCreatorStore],
})
export class DevMobileSearchCreatorComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchCreatorStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileSearchCreatorModule } from \n'@schema-driven/web/ui/mobile-search-creator' \n
<ui-mobile-search-creator></ui-mobile-search-creator>
         \n\n
        `,
      ]
    })
  }
}
