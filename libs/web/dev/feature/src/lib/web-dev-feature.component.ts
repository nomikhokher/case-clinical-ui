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
    {
      label: 'Dashboard',
      children: [{ label: 'Dashboard', path: 'dashboard', icon: '' }],
    },
    {
      label: 'Forms',
      children: [{ label: 'Forms', path: 'forms', icon: '' }],
    },
    {
      label: 'Screen Layout',
      children: [{ label: 'Layout', path: 'layout', icon: '' }],
    },
    {
      label: 'Content Layout',
      children: [{ label: 'Data Table', path: 'table', icon: '' }],
    },

    {
      label: 'Notification',
      children: [{ label: 'Toasts', path: 'toasts', icon: '' }],
    },

    {
      label: 'Elements',
      children: [
        { label: 'Avatar', path: 'avatars', icon: '' },
        { label: 'Dropdown', path: 'dropdown', icon: '' },
        { label: 'badge', path: 'badges', icon: '' },
      ],
    },

    {
      label: 'Feedback',
      children: [{ label: 'Alert', path: 'alerts', icon: '' }],
    },

    {
      label: 'Lists',
      children: [
        { label: 'Feeds', path: 'feeds', icon: '' },
        { label: 'Stacked List', path: 'lists', icon: '' },
      ],
    },

    {
      label: 'Navigation',
      children: [
        { label: 'Tabs', path: 'tabs', icon: '' },
        { label: 'Steps', path: 'steps', icon: '' },
        { label: 'Breadcrumbs', path: 'breadcrumbs', icon: '' },
      ],
    },

    {
      label: 'Formatting',
      children: [
        { label: 'Syntax Highlight', path: 'code', icon: '' },
        { label: 'JSON Formatter', path: 'json', icon: '' },
      ],
    },

    { label: 'Buttons', children: [{ label: 'Buttons', path: 'buttons', icon: '' }] },
  ]
}
