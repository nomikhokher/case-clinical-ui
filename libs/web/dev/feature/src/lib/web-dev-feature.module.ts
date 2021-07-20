import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiMainPageModule } from '@schema-driven/web/ui/main-page'
import { WebDevFeatureComponent } from './web-dev-feature.component'

@NgModule({
  declarations: [WebDevFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
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
        loadChildren: () =>
          import('./dev-list-container/dev-list-container.module').then((m) => m.DevListContainerModule),
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
        path: 'vertical-nav',
        loadChildren: () =>
          import('./dev-vertical-navigation/dev-vertical-navigation.module').then((m) => m.DevVerticalNavigationModule),
      },
      {
        path: 'toggle-switch-button',
        loadChildren: () =>
          import('./dev-toggle-switch-button/dev-toggle-switch-button.module').then(
            (m) => m.DevToggleSwitchButtonModule,
          ),
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
        loadChildren: () =>
          import('./dev-multi-checkbox/dev-multi-checkbox.module').then((m) => m.DevMultiCheckboxModule),
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
    ]),
    WebUiMainPageModule,
  ],
})
export class WebDevFeatureModule {}
