import { Component } from '@angular/core'
import { DevMobileNftCompleteStore } from './dev-mobile-nft-complete.store'

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
        <ui-mobile-nft-complete></ui-mobile-nft-complete>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileNftCompleteStore],
})
export class DevMobileNftCompleteComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftCompleteStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileNftCompleteModule } from '@schema-driven/web/ui/mobile-nft-complete' \n
<ui-mobile-nft-complete></ui-mobile-nft-complete>
         \n\n
        `,
      ]
    })
  }
}
