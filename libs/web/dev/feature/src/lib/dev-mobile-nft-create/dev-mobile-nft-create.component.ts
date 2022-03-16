import { Component } from '@angular/core'
import { DevMobileNftCreateStore } from './dev-mobile-nft-create.store'

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
        <ui-mobile-nft-create></ui-mobile-nft-create>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileNftCreateStore],
})
export class DevMobileNftCreateComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftCreateStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileNftCreateModule } from '@schema-driven/web/ui/mobile-nft-create' \n
<ui-mobile-nft-create></ui-mobile-nft-create>
         \n\n
        `,
      ]
    })
  }
}
