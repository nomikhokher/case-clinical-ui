import { Component } from '@angular/core'
import { DevMobileWalletStore } from './dev-mobile-wallet.store'

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
        <ui-mobile-wallet></ui-mobile-wallet>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileWalletStore],
})
export class DevMobileWalletComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileWalletStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiMobileWalletModule } from '@schema-driven/web/ui/mobile-wallet' \n\n
          <ui-mobile-wallet
          ></ui-mobile-wallet>
        </div> \n\n        
        `,
      ]
    })
  }
}
