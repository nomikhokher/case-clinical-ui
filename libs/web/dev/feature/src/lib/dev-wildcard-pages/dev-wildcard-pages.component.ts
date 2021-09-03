import { Component } from '@angular/core'
import { DevWildcardPagesStore } from './dev-wildcard-pages.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-wildcard-pages
          [pageStyle]="vm.config.items.pageStyle"
          [logo]="vm.config.items.logo"
          [statusCode]="vm.config.items.statusCode"
          [pageTitle]="vm.config.items.pageTitle"
          [message]="vm.config.items.message"
          [btnText]="vm.config.items.btnText"
          [linkToRedirect]="vm.config.items.linkToRedirect"
          [backImage]="vm.config.items.backImage"
        ></ui-wildcard-pages>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevWildcardPagesStore],
})
export class DevWildcardPagesComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevWildcardPagesStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiWildcardPagesModule } from '@schema-driven/web/ui/WildcardPages' \n\n 
        <ui-wildcard-pages
          [pageStyle]="vm.config.items.pageStyle"
          [logo]="vm.config.items.logo"
          [statusCode]="vm.config.items.statusCode"
          [pageTitle]="vm.config.items.pageTitle"
          [message]="vm.config.items.message"
          [btnText]="vm.config.items.btnText"
          [linkToRedirect]="vm.config.items.linkToRedirect"
          [backImage]="vm.config.items.backImage"
         ></ui-wildcard-pages> \n\n
        {
          pageStyle: ${JSON.stringify(result.config.items.pageStyle, null, '\t')}
          logo: ${JSON.stringify(result.config.items.logo, null, '\t')}
          statusCode:${JSON.stringify(result.config.items.statusCode, null, '\t')}
          pageTitle:${JSON.stringify(result.config.items.pageTitle, null, '\t')}
          message:${JSON.stringify(result.config.items.message, null, '\t')}
          btnText:${JSON.stringify(result.config.items.btnText, null, '\t')}
          linkToRedirect:${JSON.stringify(result.config.items.linkToRedirect, null, '\t')}
          backImage:${JSON.stringify(result.config.items.backImage, null, '\t')}
        }`,
      ]
    })
  }
}
