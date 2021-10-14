import { Component } from '@angular/core'

@Component({
  template: `
    <ui-main-page headerTitle="Account" [links]="links" [breadcrumbs]="breadcrumbs">
      <router-outlet></router-outlet>
    </ui-main-page>
  `,
})
export class WebAccountFeatureComponent {
  breadcrumbs = false
  links = [
    { label: 'Profile', path: 'profile', icon: '' },
    { label: 'Email', path: 'email', icon: '' },
    { label: 'Password', path: 'password', icon: '' },
  ]
}
