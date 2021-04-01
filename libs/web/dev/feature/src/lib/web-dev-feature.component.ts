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
    { label: 'Screen Layout' },
    { label: 'Layout', path: 'layout', icon: '' },
    { label: 'Content Layout' },
    { label: 'Data Table', path: 'table', icon: '' },
    { label: 'Notification' },
    { label: 'Toasts', path: 'toasts', icon: '' },
    { label: 'Navigation' },
    { label: 'Tabs', path: 'tabs', icon: '' },
    { label: 'Breadcrumbs', path: 'breadcrumbs', icon: '' },
    { label: 'Formatting' },
    { label: 'Syntax Highlight', path: 'code', icon: '' },
    { label: 'JSON Formatter', path: 'json', icon: '' },
  ]
}
