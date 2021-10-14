import { Component } from '@angular/core'

@Component({
  template: `
    <ui-wildcard-pages
      [pageStyle]="items.pageStyle"
      [logo]="items.logo"
      [statusCode]="items.statusCode"
      [pageTitle]="items.pageTitle"
      [message]="items.message"
      [btnText]="items.btnText"
      [linkToRedirect]="items.linkToRedirect"
    ></ui-wildcard-pages>
  `,
})
export class NotFoundComponent {
  items = {
    pageStyle: 'simpleWithLogo', // splitWithImage, simpleWithLogo, withBackgroundImage
    logo: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600',
    statusCode: 404,
    pageTitle: 'Page not found',
    message: 'Sorry, we couldn’t find the page you’re looking for.',
    btnText: 'Go back home',
    linkToRedirect: '/dev',
  }
}
