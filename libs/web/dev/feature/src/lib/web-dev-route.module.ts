import { Routes } from '@angular/router'
import { WebDevFeatureComponent } from './web-dev-feature.component'

export const routes: Routes = [
  {
    path: '',
    component: WebDevFeatureComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dev-dashboard/dev-dashboard.module').then((m) => m.DevDashboardModule),
  },
  { path: 'code', loadChildren: () => import('./dev-code/dev-code.module').then((m) => m.DevCodeModule) },
  { path: 'forms', loadChildren: () => import('./dev-forms/dev-forms.module').then((m) => m.DevFormsModule) },
  { path: 'upload', loadChildren: () => import('./dev-upload/dev-upload.module').then((m) => m.DevUploadModule) },
  {
    path: 'tooltip',
    loadChildren: () => import('./dev-tooltip/dev-tooltip.module').then((m) => m.DevTooltipModule),
  },
  { path: 'json', loadChildren: () => import('./dev-json/dev-json.module').then((m) => m.DevJsonModule) },
  {
    path: 'layout',
    loadChildren: () => import('./dev-layout/dev-layout.module').then((m) => m.DevLayoutModule),
  },
  {
    path: 'containers',
    loadChildren: () => import('./dev-container/dev-container.module').then((m) => m.DevContainerModule),
  },
  {
    path: 'color-pickers',
    loadChildren: () => import('./dev-color-picker/dev-color-picker.module').then((m) => m.DevColorPickerModule),
  },
  {
    path: 'tree',
    loadChildren: () => import('./dev-tree/dev-tree.module').then((m) => m.DevTreeModule),
  },
  {
    path: 'dividers',
    loadChildren: () => import('./dev-divider/dev-divider.module').then((m) => m.DevDividerModule),
  },
  {
    path: 'media-objects',
    loadChildren: () => import('./dev-media-object/dev-media-object.module').then((m) => m.DevMediaObjectModule),
  },
  {
    path: 'list-containers',
    loadChildren: () => import('./dev-list-container/dev-list-container.module').then((m) => m.DevListContainerModule),
  },
  { path: 'table', loadChildren: () => import('./dev-table/dev-table.module').then((m) => m.DevTableModule) },
  { path: 'toasts', loadChildren: () => import('./dev-toast/dev-toast.module').then((m) => m.DevToastModule) },
  { path: 'tabs', loadChildren: () => import('./dev-tab/dev-tab.module').then((m) => m.DevTabModule) },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./dev-breadcrumbs/dev-breadcrumbs.module').then((m) => m.DevBreadcrumbsModule),
  },
  { path: 'alerts', loadChildren: () => import('./dev-alert/dev-alert.module').then((m) => m.DevAlertModule) },
  {
    path: 'dropdown',
    loadChildren: () => import('./dev-dropdown/dev-dropdown.module').then((m) => m.DevDropdownModule),
  },
  {
    path: 'badges',
    loadChildren: () => import('./dev-badge/dev-badge.module').then((m) => m.DevBadgeModule),
  },
  {
    path: 'banners',
    loadChildren: () => import('./dev-banners/dev-banners.module').then((m) => m.DevBannersModule),
  },
  {
    path: 'repeater',
    loadChildren: () => import('./dev-repeater/dev-repeater.module').then((m) => m.DevRepeaterModule),
  },
  {
    path: 'avatars',
    loadChildren: () => import('./dev-avatar/dev-avatar.module').then((m) => m.DevAvatarModule),
  },
  { path: 'feeds', loadChildren: () => import('./dev-feed/dev-feed.module').then((m) => m.DevFeedModule) },
  { path: 'steps', loadChildren: () => import('./dev-step/dev-step.module').then((m) => m.DevStepModule) },
  {
    path: 'lists',
    loadChildren: () => import('./dev-stacked-lists/dev-stacked-lists.module').then((m) => m.DevStackedListsModule),
  },
  {
    path: 'buttons',
    loadChildren: () => import('./dev-button/dev-button.module').then((m) => m.DevButtonModule),
  },
  {
    path: 'group-button',
    loadChildren: () => import('./dev-group-button/dev-group-button.module').then((m) => m.DevGroupButtonModule),
  },
  {
    path: 'range-sliders',
    loadChildren: () => import('./dev-range-slider/dev-range-slider.module').then((m) => m.DevRangeSliderModule),
  },
  {
    path: 'progress-bars',
    loadChildren: () => import('./dev-progress-bar/dev-progress-bar.module').then((m) => m.DevProgressBarModule),
  },
  {
    path: 'chips',
    loadChildren: () => import('./dev-chips/dev-chips.module').then((m) => m.DevChipsModule),
  },
  {
    path: 'tag-textarea',
    loadChildren: () => import('./dev-tag-textarea/dev-tag-textarea.module').then((m) => m.DevTagTextareaModule),
  },
  {
    path: 'modals',
    loadChildren: () => import('./dev-modal/dev-modal.module').then((m) => m.DevModalModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('./dev-notification/dev-notification.module').then((m) => m.DevNotificationModule),
  },
  {
    path: 'slideovers',
    loadChildren: () => import('./dev-slide-over/dev-slide-over.module').then((m) => m.DevSlideOverModule),
  },
  {
    path: 'page-headings',
    loadChildren: () => import('./dev-page-headings/dev-page-headings.module').then((m) => m.DevPageHeadingsModule),
  },
  {
    path: 'card-headings',
    loadChildren: () => import('./dev-card-heading/dev-card-heading.module').then((m) => m.DevCardHeadingModule),
  },
  {
    path: 'table-lists',
    loadChildren: () => import('./dev-table-lists/dev-table-lists.module').then((m) => m.DevTableListsModule),
  },
  {
    path: 'sign-in-and-registrations',
    loadChildren: () =>
      import('./dev-sign-in-and-registration/dev-sign-in-and-registration.module').then(
        (m) => m.DevSignInAndRegistrationModule,
      ),
  },
  {
    path: 'section-headings',
    loadChildren: () =>
      import('./dev-section-headings/dev-section-headings.module').then((m) => m.DevSectionHeadingsModule),
  },
  {
    path: 'pricing-plans',
    loadChildren: () => import('./dev-pricing-plan/dev-pricing-plan.module').then((m) => m.DevPricingPlanModule),
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./dev-testimonials/dev-testimonials.module').then((m) => m.DevTestimonialsModule),
  },
  {
    path: 'newsletters',
    loadChildren: () => import('./dev-newsletter/dev-newsletter.module').then((m) => m.DevNewsletterModule),
  },
  {
    path: 'carousel',
    loadChildren: () => import('./dev-carousel/dev-carousel.module').then((m) => m.DevCarouselModule),
  },
  { path: 'stats', loadChildren: () => import('./dev-stats/dev-stats.module').then((m) => m.DevStatsModule) },
  {
    path: 'description-list',
    loadChildren: () =>
      import('./dev-description-list/dev-description-list.module').then((m) => m.DevDescriptionListModule),
  },
  {
    path: 'contact-cards',
    loadChildren: () => import('./dev-contact-card/dev-contact-card.module').then((m) => m.DevContactCardModule),
  },
  {
    path: 'full-calendars',
    loadChildren: () => import('./dev-full-calendar/dev-full-calendar.module').then((m) => m.DevFullCalendarModule),
  },
  {
    path: 'date-picker',
    loadChildren: () => import('./dev-date-picker/dev-date-picker.module').then((m) => m.DevDatePickerModule),
  },

  {
    path: 'ranges',
    loadChildren: () =>
      import('./dev-date-range-picker/dev-date-range-picker.module').then((m) => m.DevDateRangePickerModule),
  },

  {
    path: 'vertical-nav',
    loadChildren: () =>
      import('./dev-vertical-navigation/dev-vertical-navigation.module').then((m) => m.DevVerticalNavigationModule),
  },
  {
    path: 'toggle-switch-button',
    loadChildren: () =>
      import('./dev-toggle-switch-button/dev-toggle-switch-button.module').then((m) => m.DevToggleSwitchButtonModule),
  },
  {
    path: 'split-button',
    loadChildren: () => import('./dev-split-button/dev-split-button.module').then((m) => m.DevSplitButtonModule),
  },
  {
    path: 'paginations',
    loadChildren: () => import('./dev-pagination/dev-pagination.module').then((m) => m.DevPaginationModule),
  },
  { path: 'navbars', loadChildren: () => import('./navbars/navbars.module').then((m) => m.NavbarsModule) },
  {
    path: 'progress-button',
    loadChildren: () =>
      import('./dev-progress-button/dev-progress-button.module').then((m) => m.DevProgressButtonModule),
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./dev-toolbar/dev-toolbar.module').then((m) => m.DevToolbarModule),
  },
  {
    path: 'contact-cards',
    loadChildren: () => import('./dev-contact-card/dev-contact-card.module').then((m) => m.DevContactCardModule),
  },
  {
    path: 'sign-in-and-registrations',
    loadChildren: () =>
      import('./dev-sign-in-and-registration/dev-sign-in-and-registration.module').then(
        (m) => m.DevSignInAndRegistrationModule,
      ),
  },
  {
    path: 'text-areas',
    loadChildren: () => import('./dev-textarea/dev-textarea.module').then((m) => m.DevTextareaModule),
  },
  {
    path: 'select-menus',
    loadChildren: () => import('./dev-select/dev-select.module').then((m) => m.DevSelectModule),
  },
  {
    path: 'checkboxs',
    loadChildren: () => import('./dev-checkbox/dev-checkbox.module').then((m) => m.DevCheckboxModule),
  },
  {
    path: 'radio-groups',
    loadChildren: () => import('./dev-radio-group/dev-radio-group.module').then((m) => m.DevRadioGroupModule),
  },
  {
    path: 'repeats',
    loadChildren: () => import('./dev-repeat/dev-repeat.module').then((m) => m.DevRepeatModule),
  },
  {
    path: 'multi-checkboxs',
    loadChildren: () => import('./dev-multi-checkbox/dev-multi-checkbox.module').then((m) => m.DevMultiCheckboxModule),
  },
  {
    path: 'mini-calendars',
    loadChildren: () => import('./dev-mini-calendar/dev-mini-calendar.module').then((m) => m.DevMiniCalendarModule),
  },
  {
    path: 'range-sliders',
    loadChildren: () => import('./dev-range-slider/dev-range-slider.module').then((m) => m.DevRangeSliderModule),
  },
  {
    path: 'chips',
    loadChildren: () => import('./dev-chips/dev-chips.module').then((m) => m.DevChipsModule),
  },
  {
    path: 'progress-bars',
    loadChildren: () => import('./dev-progress-bar/dev-progress-bar.module').then((m) => m.DevProgressBarModule),
  },
  { path: 'editors', loadChildren: () => import('./dev-editor/dev-editor.module').then((m) => m.DevEditorModule) },
  {
    path: 'grid-lists',
    loadChildren: () => import('./dev-grid-list/dev-grid-list.module').then((m) => m.DevGridListModule),
  },
  {
    path: 'faq-section',
    loadChildren: () => import('./dev-faq-section/dev-faq-section.module').then((m) => m.DevFaqSectionModule),
  },
  {
    path: 'footer',
    loadChildren: () => import('./dev-footer/dev-footer.module').then((m) => m.DevFooterModule),
  },
  {
    path: 'drawing-pad',
    loadChildren: () => import('./dev-drawing-pad/dev-drawing-pad.module').then((m) => m.DevDrawingPadModule),
  },
  {
    path: 'multi-selects',
    loadChildren: () => import('./dev-multi-select/dev-multi-select.module').then((m) => m.DevMultiSelectModule),
  },
  {
    path: 'pop-confirm',
    loadChildren: () => import('./dev-pop-confirm/dev-pop-confirm.module').then((m) => m.DevPopConfirmModule),
  },
  {
    path: 'accordions',
    loadChildren: () => import('./dev-accordion/dev-accordion.module').then((m) => m.DevAccordionModule),
  },
  {
    path: 'timelines',
    loadChildren: () => import('./dev-timeline/dev-timeline.module').then((m) => m.DevTimelineModule),
  },
  { path: 'ratings', loadChildren: () => import('./dev-rating/dev-rating.module').then((m) => m.DevRatingModule) },
  {
    path: 'tree-selects',
    loadChildren: () => import('./dev-tree-select/dev-tree-select.module').then((m) => m.DevTreeSelectModule),
  },
  {
    path: 'product-overviews',
    loadChildren: () =>
      import('./dev-product-overviews/dev-product-overviews.module').then((m) => m.DevProductOverviewsModule),
  },
  {
    path: 'product-image-gallery',
    loadChildren: () =>
      import('./dev-product-image-gallery/dev-product-image-gallery.module').then(
        (m) => m.DevProductImageGalleryModule,
      ),
  },
  {
    path: 'shopping-carts',
    loadChildren: () => import('./dev-shopping-cart/dev-shopping-cart.module').then((m) => m.DevShoppingCartModule),
  },
  {
    path: 'reviews',
    loadChildren: () => import('./dev-reviews/dev-reviews.module').then((m) => m.DevReviewsModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./dev-product-list/dev-product-list.module').then((m) => m.DevProductListModule),
  },
  {
    path: 'promo-section',
    loadChildren: () => import('./dev-promo-section/dev-promo-section.module').then((m) => m.DevPromoSectionModule),
  },
  {
    path: 'category-filters',
    loadChildren: () =>
      import('./dev-category-filters/dev-category-filters.module').then((m) => m.DevCategoryFiltersModule),
  },
  {
    path: 'order-history',
    loadChildren: () => import('./dev-order-history/dev-order-history.module').then((m) => m.DevOrderHistoryModule),
  },
  {
    path: 'order-summaries',
    loadChildren: () =>
      import('./dev-order-summaries/dev-order-summaries.module').then((m) => m.DevOrderSummariesModule),
  },
  {
    path: 'store-navigation',
    loadChildren: () =>
      import('./dev-store-navigation/dev-store-navigation.module').then((m) => m.DevStoreNavigationModule),
  },
  {
    path: 'incentives',
    loadChildren: () => import('./dev-incentives/dev-incentives.module').then((m) => m.DevIncentivesModule),
  },
  {
    path: 'checkout-forms',
    loadChildren: () => import('./dev-checkout-form/dev-checkout-form.module').then((m) => m.DevCheckoutFormModule),
  },
  {
    path: 'product-quickviews',
    loadChildren: () =>
      import('./dev-product-quickviews/dev-product-quickviews.module').then((m) => m.DevProductQuickviewsModule),
  },
  {
    path: 'product-features',
    loadChildren: () =>
      import('./dev-product-features/dev-product-features.module').then((m) => m.DevProductFeaturesModule),
  },
  {
    path: 'wildcard-pages',
    loadChildren: () => import('./dev-wildcard-pages/dev-wildcard-pages.module').then((m) => m.DevWildcardPagesModule),
  },
  {
    path: 'carousel-pro',
    loadChildren: () => import('./dev-carousel-pro/dev-carousel-pro.module').then((m) => m.DevCarouselProModule),
  },
  {
    path: 'draggable',
    loadChildren: () => import('./dev-draggable/dev-draggable.module').then((m) => m.DevDraggableModule),
  },
  {
    path: 'text-area',
    loadChildren: () => import('./dev-text-areas/dev-text-areas.module').then((m) => m.DevTextAreasModule),
  },
  {
    path: 'music-player',
    loadChildren: () => import('./dev-music-player/dev-music-player.module').then((m) => m.DevMusicPlayerModule),
  },
  {
    path: 'progress-bar-pro',
    loadChildren: () =>
      import('./dev-progress-bar-pro/dev-progress-bar-pro.module').then((m) => m.DevProgressBarProModule),
  },
  {
    path: 'weather-updates',
    loadChildren: () =>
      import('./dev-weather-updates/dev-weather-updates.module').then((m) => m.DevWeatherUpdatesModule),
  },
  { path: 'loader', loadChildren: () => import('./dev-loader/dev-loader.module').then((m) => m.DevLoaderModule) },
  {
    path: 'folder-options',
    loadChildren: () => import('./dev-folder-options/dev-folder-options.module').then((m) => m.DevFolderOptionsModule),
  },
  {
    path: 'user-badge',
    loadChildren: () => import('./dev-user-badge/dev-user-badge.module').then((m) => m.DevUserBadgeModule),
  },
  {
    path: 'input-select',
    loadChildren: () => import('./dev-input-select/dev-input-select.module').then((m) => m.DevInputSelectModule),
  },
  {
    path: 'empty-states-recommendations',
    loadChildren: () =>
      import('./dev-empty-states-with-recommendations/dev-empty-states-with-recommendations.module').then(
        (m) => m.DevEmptyStatesWithRecommendationsModule,
      ),
  },
  { path: 'tour', loadChildren: () => import('./dev-tour/dev-tour.module').then((m) => m.DevTourModule) },
  {
    path: 'countdown',
    loadChildren: () => import('./dev-countdown/dev-countdown.module').then((m) => m.DevCountdownModule),
  },
  {
    path: 'contact-sections',
    loadChildren: () =>
      import('./dev-contact-sections/dev-contact-sections.module').then((m) => m.DevContactSectionsModule),
  },
  {
    path: 'contact-section-slide-brand-panel',
    loadChildren: () =>
      import('./dev-contact-section-slide-brand-panel/dev-contact-section-slide-brand-panel.module').then(
        (m) => m.DevContactSectionSlideBrandPanelModule,
      ),
  },
  {
    path: 'feature-sections-by-grid-with-offset-icons',
    loadChildren: () =>
      import(
        './dev-feature-sections-by-grid-with-offset-icons/dev-feature-sections-by-grid-with-offset-icons.module'
      ).then((m) => m.DevFeatureSectionsByGridWithOffsetIconsModule),
  },
  {
    path: 'card-with-detail',
    loadChildren: () =>
      import('./dev-card-with-detail/dev-card-with-detail.module').then((m) => m.DevCardWithDetailModule),
  },
  {
    path: 'dialog-box',
    loadChildren: () => import('./dev-dialog-box/dev-dialog-box.module').then((m) => m.DevDialogBoxModule),
  },
  {
    path: 'multiple-alert',
    loadChildren: () => import('./dev-multiple-alert/dev-multiple-alert.module').then((m) => m.DevMultipleAlertModule),
  },
  {
    path: 'collapse',
    loadChildren: () => import('./dev-collapse/dev-collapse.module').then((m) => m.DevCollapseModule),
  },
  {
    path: 'list-group',
    loadChildren: () => import('./dev-list-group/dev-list-group.module').then((m) => m.DevListGroupModule),
  },
  {
    path: 'mask',
    loadChildren: () => import('./dev-mask/dev-mask.module').then((m) => m.DevMaskModule),
  },
  {
    path: 'pills',
    loadChildren: () => import('./dev-pills/dev-pills.module').then((m) => m.DevPillsModule),
  },
  {
    path: 'side-nav-bar',
    loadChildren: () => import('./dev-side-nav-bar/dev-side-nav-bar.module').then((m) => m.DevSideNavBarModule),
  },
  {
    path: 'file-input',
    loadChildren: () => import('./dev-file-input/dev-file-input.module').then((m) => m.DevFileInputModule),
  },
  {
    path: 'team-section',
    loadChildren: () => import('./dev-team-section/dev-team-section.module').then((m) => m.DevTeamSectionModule),
  },
  {
    path: 'header',
    loadChildren: () => import('./dev-header/dev-header.module').then((m) => m.DevHeaderModule),
  },
  {
    path: 'mobile-wrapper',
    loadChildren: () => import('./dev-mobile-wrapper/dev-mobile-wrapper.module').then((m) => m.DevMobileWrapperModule),
  },
  {
    path: 'mobile-wallet',
    loadChildren: () => import('./dev-mobile-wallet/dev-mobile-wallet.module').then((m) => m.DevMobileWalletModule),
  },
  {
    path: 'mobile-profile',
    loadChildren: () => import('./dev-mobile-profile/dev-mobile-profile.module').then((m) => m.DevMobileProfileModule),
  },
  {
    path: 'mobile-gallery',
    loadChildren: () => import('./dev-mobile-gallery/dev-mobile-gallery.module').then((m) => m.DevMobileGalleryModule),
  },
  {
    path: 'mobile-best-seller',
    loadChildren: () =>
      import('./dev-mobile-best-seller/dev-mobile-best-seller.module').then((m) => m.DevMobileBestSellerModule),
  },
  {
    path: 'mobile-camera',
    loadChildren: () => import('./dev-mobile-camera/dev-mobile-camera.module').then((m) => m.DevMobileCameraModule),
  },
  {
    path: 'mobile-home',
    loadChildren: () => import('./dev-mobile-home/dev-mobile-home.module').then((m) => m.DevMobileHomeModule),
  },
]
