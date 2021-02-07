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
    { label: 'Layouts' },
    { label: 'Layout', path: 'layout', icon: '' },
    { label: 'Notification' },
    { label: 'Toasts', path: 'toasts', icon: '' },
    { label: 'Formatting' },
    { label: 'Syntax Highlight', path: 'code', icon: '' },
    { label: 'JSON Formatter', path: 'json', icon: '' },
  ]
}
