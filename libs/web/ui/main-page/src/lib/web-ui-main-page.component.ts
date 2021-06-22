import { Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { WebLayoutLink } from '@schema-driven/web/layout'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'

@Component({
  selector: 'ui-main-page',
  template: `
    <ui-page [headerTitle]="headingTitle" [breadcrumbs]="breadcrumbs">
      <ng-container *ngFor="let link of links">
        <div class="pb-5 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-xl leading-6 font-medium theme-color-700 dark:theme-color-300">
            {{ link.title }}
          </h3>
          <p class="mt-2 max-w-4xl text-sm text-gray-500 dark:text-gray-400">{{ link.subTitle }}</p>
        </div>
        <section class="divide-y divide-gray-200 dark:divide-gray-700">
          <ng-container *ngFor="let section of link.children">
            <div class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
              <h3 class="text-gray-900 font-semibold col-span-3 xl:col-span-1 dark:text-gray-300">
                {{ section.label }}
              </h3>
              <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                <ng-container *ngFor="let card of section.children">
                  <a
                    [routerLink]="card.route"
                    class="group relative bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-lg transition duration-150 ease-in-out overflow-hidden ring-1 ring-black ring-opacity-5"
                  >
                    <figure>
                      <div class="relative bg-gray-100 dark:bg-gray-700 pt-[50%] overflow-hidden">
                        <div
                          class="w-full h-full rounded-t-lg overflow-hidden group-hover:filter group-hover:blur-[6px] transition-all duration-300"
                        >
                          <img src="{{ card.image }}" alt="not found" class="w-full h-full" />
                        </div>
                      </div>
                      <figcaption class="py-3 px-4">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">{{ card.label }}</p>
                        <p class="text-xs font-medium text-gray-500 dark:text-gray-100 ">components</p>
                      </figcaption>
                    </figure>
                  </a>
                </ng-container>
              </div>
            </div>
          </ng-container>
        </section>
      </ng-container>
    </ui-page>
  `,
})
export class WebUiMainPageComponent {
  @Input() headingTitle: string
  @Input() links: WebLayoutLink[] = []

  showMenu: boolean = false
  breadcrumbs: Crumb[] = [{ label: 'UI Components', path: '.' }]

  constructor(private router: Router, private route: ActivatedRoute) {}

  handleCardClick(path: string) {
    this.router.navigate([path], { relativeTo: this.route })
  }
}
