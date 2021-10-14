import { Component } from '@angular/core'

@Component({
  template: `
    <ui-main-page headerTitle="Admin" [links]="links" [breadcrumbs]="breadcrumbs">
      <router-outlet></router-outlet>
    </ui-main-page>
  `,
})
export class WebAdminFeatureComponent {
  breadcrumbs = false
  links = [
    { label: 'Dashboards', path: 'dashboard', icon: '' },
    { label: 'Tenants', path: 'tenants', icon: '' },
    { label: 'Users', path: 'users', icon: '' },
  ]
}
