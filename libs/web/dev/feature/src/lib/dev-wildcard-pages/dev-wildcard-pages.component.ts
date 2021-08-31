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
  constructor(private readonly store: DevWildcardPagesStore) {}
  public codePreview = [
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
        pageStyle: "simpleWithLogo", // splitWithImage, simpleWithLogo, withBackgroundImage
        logo: "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600",
        statusCode: 404,
        pageTitle: "Page not found",
        message: "Sorry, we couldn’t find the page you’re looking for.",
        btnText: "Go back home",
        linkToRedirect: "http://localhost:4200/dev",
        backImage: "https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80",
      }
    `,
  ]
}
