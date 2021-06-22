import { Component } from '@angular/core'
import { WebLayoutLink } from '@schema-driven/web/layout'

@Component({
  template: `
    <ui-main-page [headingTitle]="headingTitle" [headingLead]="headingLead" [links]="links">
      <router-outlet></router-outlet>
    </ui-main-page>
  `,
})
export class WebDevFeatureComponent {
  headingTitle = 'UI Components'
  headingLead =
    'Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.'

  links: WebLayoutLink[] = [
    {
      label: 'Full Calendar',
      children: [
        {
          label: 'Full-Calendar',
          route: 'full-calendars',
          image: '/assets/images/stacked.png',
          children: [
            {
              label: 'Full Calendar',
            },
          ],
        },
      ],
    },
    {
      label: 'Dashboard',
      children: [
        {
          label: 'Dashboard',
          route: 'dashboard',
          image: '/assets/images/stacked.png',
          children: [
            {
              label: 'Stacked Layouts',
            },
          ],
        },
      ],
    },
    {
      label: 'Headings',
      children: [
        {
          label: 'Page Headings',
          route: 'page-headings',
          image: '/assets/images/page-headings.png',
          children: [
            {
              label: 'Page Headings',
            },
          ],
        },
        {
          label: 'Card Headings',
          route: 'card-headings',
          image: '/assets/images/card-headings.png',
          children: [
            {
              label: 'Card Headings',
            },
          ],
        },
        {
          label: 'Section Headings',
          route: 'section-headings',
          image: '/assets/images/section-headings.png',
          children: [
            {
              label: 'Section Headings',
            },
          ],
        },
      ],
    },
    {
      label: 'Data Display',
      children: [
        {
          label: 'Stats',
          route: 'stats',
          image: '/assets/images/stats.png',
          children: [
            {
              label: 'Stats',
            },
          ],
        },
        {
          label: 'Description List',
          route: 'description-list',
          image: '/assets/images/description-lists.png',
          children: [
            {
              label: 'Description List',
            },
          ],
        },
      ],
    },
    {
      label: 'Lists',
      children: [
        {
          label: 'Tables',
          route: 'table-lists',
          image: '/assets/images/table-lists.png',
          children: [
            {
              label: 'Tables',
            },
          ],
        },
      ],
    },
    {
      label: 'Forms',
      children: [
        {
          label: 'Forms',
          route: 'forms',
          image: '/assets/images/form-layouts.png',
          children: [
            {
              label: 'Form Layouts',
            },
          ],
        },
      ],
    },

    {
      label: 'Layout',
      children: [
        {
          label: 'Containers',
          route: 'containers',
          image: '/assets/images/containers.png',
          children: [
            {
              label: 'Containers',
            },
          ],
        },
        {
          label: 'Working.......',
          route: 'panels',
          image: '/assets/images/panels.png',
          children: [
            {
              label: 'Panels',
            },
          ],
        },
        {
          label: 'List Containers',
          route: 'list-containers',
          image: '/assets/images/list-containers.png',
          children: [
            {
              label: 'List containers',
            },
          ],
        },
        {
          label: 'Media Objects',
          route: 'media-objects',
          image: '/assets/images/media-objects.png',
          children: [
            {
              label: 'media-objects',
            },
          ],
        },
        {
          label: 'Dividers',
          route: 'dividers',
          image: '/assets/images/dividers.png',
          children: [
            {
              label: 'Dividers',
            },
          ],
        },
      ],
    },

    {
      label: 'Content Layout',
      children: [
        {
          label: 'Data Table',
          route: 'table',
          image: '/assets/images/tables.png',
          children: [
            {
              label: 'Data Table Layout',
            },
          ],
        },
      ],
    },

    {
      label: 'Calendars',
      children: [
        {
          label: 'Calendars Ui',
          route: 'calendars',
          image: '/assets/images/tables.png',
          children: [
            {
              label: 'Calendar',
            },
          ],
        },
        {
          label: 'Mini Calendars Ui',
          route: 'mini-calendars',
          image: '/assets/images/tables.png',
          children: [
            {
              label: 'Mini Calendar',
            },
          ],
        },
      ],
    },

    {
      label: 'Notification',
      children: [
        {
          label: 'Toasts',
          route: 'toasts',
          image: '/assets/images/notifications.png',
          children: [
            {
              label: 'Notifications',
            },
          ],
        },
      ],
    },

    {
      label: 'Feedback',
      children: [
        {
          label: 'Alert',
          route: 'alerts',
          image: '/assets/images/alerts.png',
          children: [
            {
              label: 'Alerts',
            },
          ],
        },
      ],
    },
    {
      label: 'Overlays',
      children: [
        {
          label: 'Modal',
          route: 'modals',
          image: '/assets/images/modals.png',
          children: [
            {
              label: 'Modals',
            },
          ],
        },

        {
          label: 'Notifications',
          route: 'notifications',
          image: '/assets/images/notifications.png',
          children: [
            {
              label: 'Notifications',
            },
          ],
        },
        {
          label: 'Slide-overs',
          route: 'slideovers',
          image: '/assets/images/notifications.png',
          children: [
            {
              label: 'Slide-overs',
            },
          ],
        },
      ],
    },
    {
      label: 'Elements',
      children: [
        {
          label: 'Avatars',
          route: 'avatars',
          image: '/assets/images/avatars.png',
          children: [
            {
              label: 'Avatars',
            },
          ],
        },
        {
          label: 'Dropdown',
          route: 'dropdown',
          image: '/assets/images/dropdowns.png',
          children: [
            {
              label: 'Dropdowns',
            },
          ],
        },
        {
          label: 'badge',
          route: 'badges',
          image: '/assets/images/badges.png',
          children: [
            {
              label: 'Badges',
            },
          ],
        },
        {
          label: 'Buttons',
          route: 'buttons',
          image: '/assets/images/buttons.png',
          children: [
            {
              label: 'Buttons',
            },
          ],
        },
        {
          label: 'Group Buttons',
          route: 'group-button',
          image: '/assets/images/button-groups.png',
          children: [
            {
              label: 'Button Groups',
            },
          ],
        },
      ],
    },
    {
      label: 'Navigation',
      children: [
        {
          label: 'Tree',
          route: 'tree',
          image: '/assets/images/vertical-navigation.png',
          children: [
            {
              label: 'Tree',
            },
          ],
        },
        {
          label: 'Steps',
          route: 'steps',
          image: '/assets/images/steps.png',
          children: [
            {
              label: 'Steps',
            },
          ],
        },
        {
          label: 'Breadcrumbs',
          route: 'breadcrumbs',
          image: '/assets/images/breadcrumbs.png',
          children: [
            {
              label: 'Breadcrumbs',
            },
          ],
        },
        {
          label: 'Tabs',
          route: 'tabs',
          image: '/assets/images/tabs.png',
          children: [
            {
              label: 'Tabs',
            },
          ],
        },
        {
          label: 'Pagination',
          route: 'paginations',
          image: '/assets/images/pagination.png',
          children: [
            {
              label: 'Pagination',
            },
          ],
        },
        {
          label: 'Vertical Navigation',
          route: 'vertical-nav',
          image: '/assets/images/vertical-navigation.png',
          children: [
            {
              label: 'Vertical Navigation',
            },
          ],
        },
        {
          label: 'Navbars',
          route: 'navbars',
          image: '/assets/images/navbars.png',
          children: [
            {
              label: 'Navbars',
            },
          ],
        },
      ],
    },
    {
      label: 'Syntax Highlight',
      children: [
        {
          label: 'JSON Formatter',
          route: 'json',
          image:
            'https://storage.googleapis.com/website-dev-images/sites/default/files/shutterstock_671233504%20%281%29.jpg',
          children: [
            {
              label: 'Json Api',
            },
          ],
        },
      ],
    },
    {
      label: 'Lists',
      children: [
        {
          label: 'Feeds',
          route: 'feeds',
          image: '/assets/images/feeds.png',
          children: [
            {
              label: 'Feeds',
            },
          ],
        },
        {
          label: 'Stacked List',
          route: 'lists',
          image: '/assets/images/stacked-lists.png',
          children: [
            {
              label: 'Stacked Lists',
            },
          ],
        },
        {
          label: 'Working....',
          route: 'grid-lists',
          image: '/assets/images/grid-lists.png',
          children: [
            {
              label: 'Grid Lists',
            },
          ],
        },
      ],
    },
  ]
}
