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
    { label: 'Forms', path: 'forms', icon: '' },
    { label: 'Layout', path: 'layout', icon: '' },
  ]
}
