import { Component } from '@angular/core'
import { WebLayoutLink } from '@schema-driven/web/layout'

@Component({
  template: `
    <div class="bg-gray-50 dark:bg-gray-900">
      <ui-main-page [headingTitle]="headingTitle" [links]="links"></ui-main-page>
    </div>
  `,
})
export class WebDevFeatureComponent {
  headingTitle = 'Components'
  links: WebLayoutLink[] = [
    {
      title: 'Application UI',
      subTitle: `Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.`,
      children: [
        {
          label: 'Full Calendar',
          children: [
            {
              label: 'Full-Calendar',
              route: 'full-calendars',
              image: '/assets/images/stacked.png',
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
            },
            {
              label: 'Card Headings',
              route: 'card-headings',
              image: '/assets/images/card-headings.png',
            },
            {
              label: 'Section Headings',
              route: 'section-headings',
              image: '/assets/images/section-headings.png',
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
            },
            {
              label: 'Description List',
              route: 'description-list',
              image: '/assets/images/description-lists.png',
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
            },
            {
              label: 'Panels',
              route: 'panels',
              image: '/assets/images/panels.png',
            },
            {
              label: 'List Containers',
              route: 'list-containers',
              image: '/assets/images/list-containers.png',
            },
            {
              label: 'Media Objects',
              route: 'media-objects',
              image: '/assets/images/media-objects.png',
            },
            {
              label: 'Dividers',
              route: 'dividers',
              image: '/assets/images/dividers.png',
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
            },
            {
              label: 'Mini Calendars Ui',
              route: 'mini-calendars',
              image: '/assets/images/tables.png',
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
            },

            {
              label: 'Notifications',
              route: 'notifications',
              image: '/assets/images/notifications.png',
            },
            {
              label: 'Slide-overs',
              route: 'slideovers',
              image: '/assets/images/notifications.png',
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
            },
            {
              label: 'Dropdown',
              route: 'dropdown',
              image: '/assets/images/dropdowns.png',
            },
            {
              label: 'badge',
              route: 'badges',
              image: '/assets/images/badges.png',
            },
            {
              label: 'Buttons',
              route: 'buttons',
              image: '/assets/images/buttons.png',
            },
            {
              label: 'Group Buttons',
              route: 'group-button',
              image: '/assets/images/button-groups.png',
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
            },
            {
              label: 'Steps',
              route: 'steps',
              image: '/assets/images/steps.png',
            },
            {
              label: 'Breadcrumbs',
              route: 'breadcrumbs',
              image: '/assets/images/breadcrumbs.png',
            },
            {
              label: 'Tabs',
              route: 'tabs',
              image: '/assets/images/tabs.png',
            },
            {
              label: 'Pagination',
              route: 'paginations',
              image: '/assets/images/pagination.png',
            },
            {
              label: 'Vertical Navigation',
              route: 'vertical-nav',
              image: '/assets/images/vertical-navigation.png',
            },
            {
              label: 'Navbars',
              route: 'navbars',
              image: '/assets/images/navbars.png',
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
            },
            {
              label: 'Stacked List',
              route: 'lists',
              image: '/assets/images/stacked-lists.png',
            },
            {
              label: 'Working....',
              route: 'grid-lists',
              image: '/assets/images/grid-lists.png',
            },
          ],
        },
      ],
    },
  ]
}
