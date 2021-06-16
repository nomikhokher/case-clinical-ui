import { Component } from '@angular/core'
@Component({
  template: `
    <ui-main-page headerTitle="Development" [links]="links">
      <router-outlet></router-outlet>
    </ui-main-page>
  `,
})
export class WebDevFeatureComponent {
  links = [
    {
      heading: 'Application UI',
      title:
        'Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.',
      childs: [
        {
          name: 'FullCalendar',
          childs: [
            {
              label: 'Full-Calendar',
              path: 'full-calendars',
              img: '/assets/images/stacked.png',
              childs: [
                {
                  name: 'Full Calendar',
                },
              ],
            },
          ],
        },
        {
          name: 'Dashboard',
          childs: [
            {
              label: 'Dashboard',
              path: 'dashboard',
              img: '/assets/images/stacked.png',
              childs: [
                {
                  name: 'Stacked Layouts',
                },
              ],
            },
          ],
        },
        {
          name: 'Data Display',
          childs: [
            {
              label: 'Stats',
              path: 'stats',
              img: '/assets/images/stats.png',
              childs: [
                {
                  name: 'Stats',
                },
              ],
            },
          ],
        },
        {
          name: 'Forms',
          childs: [
            {
              label: 'Forms',
              path: 'forms',
              img: '/assets/images/form-layouts.png',
              childs: [
                {
                  name: 'Form Layouts',
                },
              ],
            },
          ],
        },

        {
          name: 'Layout',
          childs: [
            {
              label: 'Containers',
              path: 'containers',
              img: '/assets/images/containers.png',
              childs: [
                {
                  name: 'Containers',
                },
              ],
            },
            {
              label: 'Working.......',
              path: 'panels',
              img: '/assets/images/panels.png',
              childs: [
                {
                  name: 'Panels',
                },
              ],
            },
            {
              label: 'List Containers',
              path: 'list-containers',
              img: '/assets/images/list-containers.png',
              childs: [
                {
                  name: 'List containers',
                },
              ],
            },
            {
              label: 'Media Objects',
              path: 'media-objects',
              img: '/assets/images/media-objects.png',
              childs: [
                {
                  name: 'media-objects',
                },
              ],
            },
            {
              label: 'Dividers',
              path: 'dividers',
              img: '/assets/images/dividers.png',
              childs: [
                {
                  name: 'Dividers',
                },
              ],
            },
          ],
        },

        {
          name: 'Content Layout',
          childs: [
            {
              label: 'Data Table',
              path: 'table',
              img: '/assets/images/tables.png',
              childs: [
                {
                  name: 'Data Table Layout',
                },
              ],
            },
          ],
        },

        {
          name: 'Calendars',
          childs: [
            {
              label: 'Calendars Ui',
              path: 'calendars',
              img: '/assets/images/tables.png',
              childs: [
                {
                  name: 'Calendar',
                },
              ],
            },
            {
              label: 'Mini Calendars Ui',
              path: 'mini-calendars',
              img: '/assets/images/tables.png',
              childs: [
                {
                  name: 'Mini Calendar',
                },
              ],
            },
          ],
        },

        {
          name: 'Notification',
          childs: [
            {
              label: 'Toasts',
              path: 'toasts',
              img: '/assets/images/notifications.png',
              childs: [
                {
                  name: 'Notifications',
                },
              ],
            },
          ],
        },

        {
          name: 'Feedback',
          childs: [
            {
              label: 'Alert',
              path: 'alerts',
              img: '/assets/images/alerts.png',
              childs: [
                {
                  name: 'Alerts',
                },
              ],
            },
          ],
        },
        {
          name: 'Overlays',
          childs: [
            {
              label: 'Modal',
              path: 'modals',
              img: '/assets/images/modals.png',
              childs: [
                {
                  name: 'Modals',
                },
              ],
            },

            {
              label: 'Notifications',
              path: 'notifications',
              img: '/assets/images/notifications.png',
              childs: [
                {
                  name: 'Notifications',
                },
              ],
            },
            {
              label: 'Slide-overs',
              path: 'slideovers',
              img: '/assets/images/notifications.png',
              childs: [
                {
                  name: 'Slide-overs',
                },
              ],
            },
          ],
        },
        {
          name: 'Elements',
          childs: [
            {
              label: 'Avatars',
              path: 'avatars',
              img: '/assets/images/avatars.png',
              childs: [
                {
                  name: 'Avatars',
                },
              ],
            },
            {
              label: 'Dropdown',
              path: 'dropdown',
              img: '/assets/images/dropdowns.png',
              childs: [
                {
                  name: 'Dropdowns',
                },
              ],
            },
            {
              label: 'badge',
              path: 'badges',
              img: '/assets/images/badges.png',
              childs: [
                {
                  name: 'Badges',
                },
              ],
            },
            {
              label: 'Buttons',
              path: 'buttons',
              img: '/assets/images/buttons.png',
              childs: [
                {
                  name: 'Buttons',
                },
              ],
            },
            {
              label: 'Group Buttons',
              path: 'group-button',
              img: '/assets/images/button-groups.png',
              childs: [
                {
                  name: 'Button Groups',
                },
              ],
            },
          ],
        },
        {
          name: 'Navigation',
          childs: [
            {
              label: 'Tree',
              path: 'tree',
              childs: [
                {
                  name: 'Tree',
                },
              ],
            },
            {
              label: 'Steps',
              path: 'steps',
              img: '/assets/images/steps.png',
              childs: [
                {
                  name: 'Steps',
                },
              ],
            },
            {
              label: 'Breadcrumbs',
              path: 'breadcrumbs',
              img: '/assets/images/breadcrumbs.png',
              childs: [
                {
                  name: 'Breadcrumbs',
                },
              ],
            },
            {
              label: 'Tabs',
              path: 'code',
              img: '/assets/images/tabs.png',
              childs: [
                {
                  name: 'Tabs',
                },
              ],
            },
            {
              label: 'Pagination',
              path: 'paginations',
              img: '/assets/images/pagination.png',
              childs: [
                {
                  name: 'Pagination',
                },
              ],
            },
            {
              label: 'Vertical Navigation',
              path: 'vertical-nav',
              img: '/assets/images/vertical-navigation.png',
              childs: [
                {
                  name: 'Vertical Navigation',
                },
              ],
            },
            {
              label: 'Navbars',
              path: 'navbars',
              img: '/assets/images/navbars.png',
              childs: [
                {
                  name: 'Navbars',
                },
              ],
            },
          ],
        },
        {
          name: 'Syntax Highlight',
          childs: [
            {
              label: 'JSON Formatter',
              path: 'json',
              img:
                'https://storage.googleapis.com/website-dev-images/sites/default/files/shutterstock_671233504%20%281%29.jpg',
              childs: [
                {
                  name: 'Json Api',
                },
              ],
            },
          ],
        },
        {
          name: 'Lists',
          childs: [
            {
              label: 'Feeds',
              path: 'feeds',
              img: '/assets/images/feeds.png',
              childs: [
                {
                  name: 'Feeds',
                },
              ],
            },
            {
              label: 'Stacked List',
              path: 'lists',
              img: '/assets/images/stacked-lists.png',
              childs: [
                {
                  name: 'Stacked Lists',
                },
              ],
            },
            {
              label: 'Working....',
              path: 'grid-lists',
              img: '/assets/images/grid-lists.png',
              childs: [
                {
                  name: 'Grid Lists',
                },
              ],
            },
          ],
        },
      ],
    },
  ]
}
