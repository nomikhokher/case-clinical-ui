import { Component, Input } from '@angular/core'
import { NavLink } from './models'

@Component({
  selector: 'ui-vertical-navigation',
  template: `
    <section class="space-y-1" aria-label="Sidebar">
      <ng-container *ngFor="let link of links">
        <a
          [routerLink]="link.route"
          [ngClass]="
            linkClasses +
            ' flex items-center px-3 h-14 text-sm font-medium rounded-md transition duration-200 ease-in-out'
          "
          aria-current="page"
          [routerLinkActive]="
            onBrand
              ? 'theme-color-100 theme-bg-800 dark:theme-bg-900 relative hover:theme-bg-500'
              : 'bg-gray-200 text-gray-900'
          "
        >
          <ui-icon
            [ngClass]="iconClasses + ' flex-shrink-0 -ml-1 mr-3 h-8 w-7'"
            [routerLinkActive]="
              onBrand ? 'theme-color-100 dark:theme-color-50 group-hover:text-gray-300' : 'text-gray-500'
            "
            [icon]="link.icon"
          ></ui-icon>

          <span class="truncate">
            {{ link.label }}
          </span>

          <span
            *ngIf="link.badge"
            [ngClass]="badgeClasses + ' ml-auto inline-block py-0.5 px-3 text-xs rounded-full'"
            routerLinkActive="bg-gray-50"
          >
            {{ link.badge }}
          </span>
        </a>
      </ng-container>
    </section>
  `,
})
export class WebUiVerticalNavigationComponent {
  @Input() links?: NavLink[]
  @Input() onBrand?: boolean = true

  get linkClasses() {
    const defaultClasses = 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    const onBrandClasses = 'theme-color-200'
    return this.onBrand ? onBrandClasses : defaultClasses
  }

  get iconClasses() {
    const defaultClasses = 'text-gray-400'
    const onBrandClasses = 'theme-color-300'
    return this.onBrand ? onBrandClasses : defaultClasses
  }

  get badgeClasses() {
    const defaultClasses = 'bg-gray-200 text-gray-600'
    const onBrandClasses = 'theme-bg-500 theme-color-100'
    return this.onBrand ? onBrandClasses : defaultClasses
  }

  public str = `<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />`
}
