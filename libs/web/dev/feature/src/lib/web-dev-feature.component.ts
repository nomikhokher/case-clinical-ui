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
          label: 'Page Section',
          children: [
            {
              label: 'Pricing Plans',
              route: 'pricing-plans',
              image: '/assets/images/pricing-plan.png',
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
            {
              label: 'Repeater',
              route: 'repeater',
              image: '/assets/images/stacked-lists.png',
            },
          ],
        },
        {
          label: 'Page Sections',
          children: [
            {
              label: 'FAQs',
              route: 'faq-section',
              image: '/assets/images/faq-sections.png',
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
            {
              label: 'Contact Card',
              route: 'contact-cards',
              image: '/assets/images/contact-card.png',
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
            {
              label: 'Sign-in and Registration',
              route: 'sign-in-and-registrations',
              image: '/assets/images/sign-in-and-registration.png',
            },
            {
              label: 'Color Picker',
              route: 'color-pickers',
              image: '/assets/images/color-picker.png',
            },
            {
              label: 'Text Area',
              route: 'text-areas',
              image: '/assets/images/form-layouts.png',
            },
            {
              label: 'Select Menus',
              route: 'select-menus',
              image: '/assets/images/select-menus.png',
            },
            {
              label: 'Radio Groups',
              route: 'radio-groups',
              image: '/assets/images/radio-groups.png',
            },
            {
              label: 'Checkbox',
              route: 'checkboxs',
              image: '/assets/images/checkbox.png',
            },
            {
              label: 'Repeat',
              route: 'repeats',
              image: '/assets/images/form-layouts.png',
            },
            {
              label: 'Multi Checkbox',
              route: 'multi-checkboxs',
              image: '/assets/images/form-layouts.png',
            },
            {
              label: 'Editor',
              route: 'editors',
              image: '/assets/images/froalaeditor.png',
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
            // {
            //   label: 'Panels',
            //   route: 'panels',
            //   image: '/assets/images/panels.png',
            // },
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
              label: 'Full Calendar Ui',
              route: 'full-calendars',
              image: '/assets/images/full-calendar.png',
            },
            {
              label: 'Date Picker',
              route: 'date-picker',
              image: '/assets/images//mini-calendars.png',
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
              image: '/assets/images/slide-overs.png',
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
            {
              label: 'Range Slider',
              route: 'range-sliders',
              image: '/assets/images/multi-range-silder.png',
            },
            {
              label: 'Chips',
              route: 'chips',
              image: '/assets/images/chips.png',
            },
            {
              label: 'Progress Bar',
              route: 'progress-bars',
              image: '/assets/images/progress-bar.png',
            },
            {
              label: 'Toggle Switch Button',
              route: 'toggle-switch-button',
              image: '/assets/images/toggles.png',
            },
            {
              label: 'Progress Button',
              route: 'progress-button',
              image: '/assets/images/progress-button.png',
            },
            {
              label: 'Split Button',
              route: 'split-button',
              image: 'assets/images/split-button.png',
            },
          ],
        },
        {
          label: 'Navigation',
          children: [
            {
              label: 'Tree',
              route: 'tree',
              image: '/assets/images/tree.png',
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
            {
              label: 'Toolbar',
              route: 'toolbar',
              image: '/assets/images/toolbar.png',
            },
          ],
        },
        {
          label: 'Syntax Highlight',
          children: [
            {
              label: 'JSON Formatter',
              route: 'json',
              image: '/assets/images/json.png',
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
              label: 'Grid Lists',
              route: 'grid-lists',
              image: '/assets/images/grid-lists.png',
            },
          ],
        },
        {
          label: 'Page Examples',
          children: [
            {
              label: 'Dashboard',
              route: 'dashboard',
              image: '/assets/images/stacked.png',
            },
          ],
        },
      ],
    },
  ]
}
