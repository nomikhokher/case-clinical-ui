import { Component } from '@angular/core'
import { DevMobileHomeScrollStore } from './dev-mobile-home-scroll.store'

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
        <ui-mobile-home-scroll></ui-mobile-home-scroll>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileHomeScrollStore],
})
export class DevMobileHomeScrollComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileHomeScrollStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileHomeScrollModule } from '@schema-driven/web/ui/mobile-home-scroll' \n
<ui-mobile-home-scroll></ui-mobile-home-scroll>
         \n\n        
        `,
      ]
    })
  }
}
