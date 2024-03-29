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
            {
              label: 'Testimonials',
              route: 'testimonials',
              image: '/assets/images/testimonials.png',
            },
            {
              label: 'NewsLetter Sections',
              route: 'newsletters',
              image: '/assets/images/newsletter-sections.png',
            },
            {
              label: 'Carousel',
              route: 'carousel',
              image: '/assets/images/carousel.png',
            },
            {
              label: 'Carousel Pro',
              route: 'carousel-pro',
              image: '/assets/images/carousel-pro.png',
            },
            {
              label: 'Draggable',
              route: 'draggable',
              image: '/assets/images/draggable.png',
            },
            {
              label: 'Music Player',
              route: 'music-player',
              image: '/assets/images/music-player.png',
            },
            {
              label: 'Weather Updates',
              route: 'weather-updates',
              image: '/assets/images/weather-updates.png',
            },
            {
              label: 'User Badge',
              route: 'user-badge',
              image: '/assets/images/weather-updates.png',
            },
            {
              label: 'Empty States With Recommendations',
              route: 'empty-states-recommendations',
              image: '/assets/images/weather-updates.png',
            },
            {
              label: 'Feature Sections By Grid With Offset Icons',
              route: 'feature-sections-by-grid-with-offset-icons',
              image: '/assets/images/feature-sections.png',
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
              image: '/assets/images/repeater.png',
            },
            {
              label: 'Upload',
              route: 'upload',
              image: '/assets/images/upload.png',
            },
            {
              label: 'Tooltip',
              route: 'tooltip',
              image: '/assets/images/tooltip.png',
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
            {
              label: 'Footer',
              route: 'footer',
              image: '/assets/images/footers.png',
            },
            {
              label: 'Contact Section',
              route: 'contact-sections',
              image: '/assets/images/contact-sections.png',
            },
            {
              label: 'Contact Section By Slide Brand Panel',
              route: 'contact-section-slide-brand-panel',
              image: '/assets/images/contact_section_by_slide_panel.png',
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
              label: 'Input Select',
              route: 'input-select',
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
              image: '/assets/images/repeat.png',
            },
            {
              label: 'Multi Checkbox',
              route: 'multi-checkboxs',
              image: '/assets/images/multi-checkbox.png',
            },
            {
              label: 'Editor',
              route: 'editors',
              image: '/assets/images/froalaeditor.png',
            },
            {
              label: 'List Group',
              route: 'list-group',
              image: '/assets/images/grouplist.png',
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
            {
              label: 'Card With Detail',
              route: 'card-with-detail',
              image: '/assets/images/card-with-detail.png',
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
            {
              label: 'Multiple Alert',
              route: 'multiple-alert',
              image: '/assets/images/multiple-Alert.png',
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
            {
              label: 'Wildcard Pages',
              route: 'wildcard-pages',
              image: '/assets/images/product-overviews.png',
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
            {
              label: 'Tour',
              route: 'tour',
              image: '/assets/images/slide-overs.png',
            },
            {
              label: 'Dialog Box',
              route: 'dialog-box',
              image: '/assets/images/dialog_box.png',
            },
            {
              label: 'Mask',
              route: 'mask',
              image: '/assets/images/mask.png',
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
              label: 'Banner',
              route: 'banners',
              image: '/assets/images/banners.png',
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
              label: 'Tag Textarea',
              route: 'tag-textarea',
              image: '/assets/images/chips.png',
            },
            {
              label: 'Progress Bar',
              route: 'progress-bars',
              image: '/assets/images/progress-bar.png',
            },
            {
              label: 'Progress Bar Pro',
              route: 'progress-bar-pro',
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
              label: 'Loader',
              route: 'loader',
              image: '/assets/images/progress-button.png',
            },
            {
              label: 'Folder Options',
              route: 'folder-options',
              image: '/assets/images/folder-options.png',
            },
            {
              label: 'Split Button',
              route: 'split-button',
              image: 'assets/images/split-button.png',
            },
            {
              label: 'Drawing Pad',
              route: 'drawing-pad',
              image: '/assets/images/drawing.png',
            },
            {
              label: 'Pop Confirm',
              route: 'pop-confirm',
              image: '/assets/images/pop-confirm.png',
            },
            {
              label: 'Accordion',
              route: 'accordions',
              image: '/assets/images/accordion.png',
            },
            {
              label: 'Timeline',
              route: 'timelines',
              image: '/assets/images/time-line.png',
            },
            {
              label: 'Rating',
              route: 'ratings',
              image: '/assets/images/rating.png',
            },
            {
              label: 'Tree Select',
              route: 'tree-selects',
              image: '/assets/images/tree-select.png',
            },
            {
              label: 'Multi Select',
              route: 'multi-selects',
              image: '/assets/images/multiple-select.png',
            },
            {
              label: 'Text Areas',
              route: 'text-area',
              image: '/assets/images/multiple-select.png',
            },
            {
              label: 'CountDown',
              route: 'countdown',
              image: '/assets/images/countdown.png',
            },
            {
              label: 'Pills',
              route: 'pills',
              image: '/assets/images/pills.png',
            },
            {
              label: 'Collapse',
              route: 'collapse',
              image: '/assets/images/collapse.png',
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

        {
          label: 'Ecommerce',
          children: [
            {
              label: 'Product Overviews',
              route: 'product-overviews',
              image: '/assets/images/product-overviews.png',
            },
            {
              label: 'Product Image Gallery',
              route: 'product-image-gallery',
              image: '/assets/images/category-previews.png',
            },
            {
              label: 'Product Lists',
              route: 'product-list',
              image: '/assets/images/product-lists.png',
            },
            {
              label: 'Reviews',
              route: 'reviews',
              image: '/assets/images/reviews.png',
            },
            {
              label: 'Shopping Carts',
              route: 'shopping-carts',
              image: '/assets/images/shopping-carts.png',
            },
            {
              label: 'Promo Sections',
              route: 'promo-section',
              image: '/assets/images/promo-sections.png',
            },
            {
              label: 'Order History',
              route: 'order-history',
              image: '/assets/images/order-history.png',
            },
            {
              label: 'Category Filters',
              route: 'category-filters',
              image: '/assets/images/category-filters.png',
            },
            {
              label: 'Order Summaries',
              route: 'order-summaries',
              image: '/assets/images/order-summaries.png',
            },
            {
              label: 'Incentives',
              route: 'incentives',
              image: '/assets/images/incentives.png',
            },
            {
              label: 'Checkout Forms',
              route: 'checkout-forms',
              image: '/assets/images/checkout-forms.png',
            },
            {
              label: 'Product Quickviews',
              route: 'product-quickviews',
              image: '/assets/images/product-quickviews.png',
            },
            {
              label: 'Product Features',
              route: 'product-features',
              image: '/assets/images/product-features.png',
            },
            {
              label: 'Store Navigation',
              route: 'store-navigation',
              image: '/assets/images/store-navigation.png',
            },
            {
              label: 'Side Navbar',
              route: 'side-nav-bar',
              image: '/assets/images/side-nav-bar.png',
            },
            {
              label: 'File Input',
              route: 'file-input',
              image: '/assets/images/file-input.png',
            },
            {
              label: 'Team Section',
              route: 'team-section',
              image: '/assets/images/team-section.png',
            },
            {
              label: 'Header',
              route: 'header',
              image: '/assets/images/header.png',
            },
            // {
            //   label: 'Combobox',
            //   route: 'combobox',
            //   image: '/assets/images/header.png',
            // },
          ],
        },
        {
          label: 'Mobile UI',
          children: [
            {
              label: 'Wallet',
              route: 'mobile-wallet',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Default',
              route: 'mobile-profile',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Gallery',
              route: 'mobile-gallery',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Best Seller',
              route: 'mobile-best-seller',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Camera',
              route: 'mobile-camera',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Home',
              route: 'mobile-home',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Home_Scroll',
              route: 'mobile-home-scroll',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Best_Seller_Scroll',
              route: 'mobile-best-seller-scroll',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Notification List',
              route: 'mobile-notification-list',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Search',
              route: 'mobile-search',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Search All',
              route: 'mobile-search-all',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Search Creator',
              route: 'mobile-search-creator',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Search Artwork',
              route: 'mobile-search-artwork',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Search Collection',
              route: 'mobile-search-collection',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Discovery',
              route: 'mobile-discovery',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Collection',
              route: 'mobile-collection',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Collection Create',
              route: 'mobile-collection-create',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Profile Following',
              route: 'mobile-profile-following',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'NFT Create',
              route: 'mobile-nft-create',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'NFT Preview',
              route: 'mobile-nft-preview',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'NFT Complete',
              route: 'mobile-nft-complete',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Detail',
              route: 'mobile-detail',
              image: '/assets/images/stacked.png',
            },
            {
              label: 'Profile Home',
              route: 'mobile-profile-home',
              image: '/assets/images/stacked.png',
            },
          ],
        },
      ],
    },
  ]
}
