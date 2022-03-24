import { Component } from '@angular/core'
import { DevMobileDetailStore } from './dev-mobile-detail.store'

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
        <ui-mobile-detail></ui-mobile-detail>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileDetailStore],
})
export class DevMobileDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDetailStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileDetailModule } from '@schema-driven/web/ui/mobile-detail' \n
<ui-mobile-detail></ui-mobile-detail>
         \n\n
        `,
      ]
    })
  }
}
