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
          name: 'Dashboard',
          childs: [
            {
              label: 'Dashboard',
              path: 'dashboard',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/application-shells/stacked.png',
              childs: [
                {
                  name: 'Stacked Layouts',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/forms/form-layouts.png',
              childs: [
                {
                  name: 'Form Layouts',
                },
              ],
            },
          ],
        },

        {
          name: 'Screen Layout',
          childs: [
            {
              label: 'Layout',
              path: 'layout',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/layout/containers.png',
              childs: [
                {
                  name: 'Containers',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/layout/containers.png',
              childs: [
                {
                  name: 'Data Table Layout',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/overlays/notifications.png',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/feedback/alerts.png',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/overlays/modals.png',
              childs: [
                {
                  name: 'Modals',
                },
              ],
            },

            {
              label: 'Notifications',
              path: 'notifications',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/overlays/notifications.png',
              childs: [
                {
                  name: 'Notifications',
                },
              ],
            },
            {
              label: 'Slide-overs',
              path: 'slideovers',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/overlays/notifications.png',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/elements/avatars.png',
              childs: [
                {
                  name: 'Avatars',
                },
              ],
            },
            {
              label: 'Dropdown',
              path: 'dropdown',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/elements/dropdowns.png',
              childs: [
                {
                  name: 'Dropdowns',
                },
              ],
            },
            {
              label: 'badge',
              path: 'badges',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/elements/badges.png',
              childs: [
                {
                  name: 'Badges',
                },
              ],
            },
            {
              label: 'Buttons',
              path: 'buttons',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/elements/buttons.png',
              childs: [
                {
                  name: 'Buttons',
                },
              ],
            },
            {
              label: 'Group Buttons',
              path: 'group-button',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/elements/button-groups.png',
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
              label: 'Steps',
              path: 'steps',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/navigation/steps.png',
              childs: [
                {
                  name: 'Steps',
                },
              ],
            },
            {
              label: 'Breadcrumbs',
              path: 'breadcrumbs',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/navigation/breadcrumbs.png',
              childs: [
                {
                  name: 'Breadcrumbs',
                },
              ],
            },
            {
              label: 'Tabs',
              path: 'code',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/navigation/tabs.png',
              childs: [
                {
                  name: 'Tabs',
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
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/lists/feeds.png',
              childs: [
                {
                  name: 'Feeds',
                },
              ],
            },
            {
              label: 'Stacked List',
              path: 'lists',
              img: 'https://tailwindui.com/img/category-thumbnails-refresh/lists/stacked-lists.png',
              childs: [
                {
                  name: 'Stacked Lists',
                },
              ],
            },
          ],
        },
      ],
    },
  ]
}
