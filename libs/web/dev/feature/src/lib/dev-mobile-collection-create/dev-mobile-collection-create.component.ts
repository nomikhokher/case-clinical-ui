import { Component } from '@angular/core'
import { DevMobileCollectionCreateStore } from './dev-mobile-collection-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-mobile-collection-create></ui-mobile-collection-create>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileCollectionCreateStore],
})
export class DevMobileCollectionCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCollectionCreateStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileCollectionCreateModule } from '@schema-driven/web/ui/mobile-collection-create' \n
<ui-mobile-collection-create></ui-mobile-collection-create>
         \n\n
        `,
      ]
    })
  }
}
