import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Development" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebDevFeatureComponent {
  links = [
    { label: 'Dashboard', path: 'dashboard', icon: '' },
    { label: 'Code', path: 'code', icon: '' },
    { label: 'Forms', path: 'forms', icon: '' },
    { label: 'Json', path: 'json', icon: '' },
    { label: 'Layout', path: 'layout', icon: '' },
    { label: 'Toasts', path: 'toasts', icon: '' },
  ]
}
