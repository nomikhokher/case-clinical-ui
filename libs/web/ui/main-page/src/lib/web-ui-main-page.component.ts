import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { WebLayoutLink } from '@schema-driven/web/layout'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'

@Component({
  selector: 'ui-main-page',
  template: `
    <ui-page [headerTitle]="headingTitle" [breadcrumbs]="breadcrumbs">
      <div>
        <p class="font-base font-gray-600">{{ headingLead }}</p>
      </div>

      <ng-container *ngFor="let link of links">
        <section id="product-marketing" class="divide-y divide-gray-200">
          <div class="pb-6">
            <h2 class="text-2xl font-extrabold theme-color-600 dark:theme-color-600">{{ link.heading }}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-300 mt-2">
              {{ link.label }}
            </p>
          </div>
          <div
            id="product-marketing-sections"
            class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6"
            *ngFor="let child of link.children"
          >
            <h3 class="text-gray-900 font-semibold col-span-3 xl:col-span-1 dark:text-gray-300">
              {{ child.label }}
            </h3>
            <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
              <a
                *ngFor="let children of child.children"
                [routerLink]="children.path"
                class="group relative bg-white dark:bg-gray-600 rounded-lg shadow-sm hover:shadow-lg transition duration-150 ease-in-out overflow-hidden ring-1 ring-black ring-opacity-5"
                (click)="menuOpen(child.label, children.children)"
              >
                <figure>
                  <div class="relative bg-gray-100 pt-[50%] overflow-hidden">
                    <div
                      class="w-full h-full rounded-t-lg overflow-hidden group-hover:filter group-hover:blur-[6px] transition-all duration-300"
                    >
                      <img src="{{ children.image }}" alt="not found" class="w-full h-full" />
                    </div>
                  </div>
                  <figcaption class="py-3 px-4">
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">{{ children.label }}</p>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-100 ">components</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </section>
      </ng-container>
    </ui-page>
  `,
})
export class WebUiMainPageComponent {
  @Input() headingTitle: string
  @Input() headingLead: string
  @Input() headerLead: string
  @Input() links: WebLayoutLink[] = []

  showMenu: boolean = false
  breadcrumbs: Crumb[] = [{ label: 'UI Components', path: '.' }]

  constructor(private router: Router) {}

  ngOnInit() {
    // if (this.router.url) {
    //   const url = this.router.url.split('/')[this.router.url.split('/').length - 1]
    //   this.router.navigateByUrl[url]
    //   for (const iterator of this.links) {
    //     for (const newArr of iterator.children) {
    //       for (let index = 0; index < newArr.children.length; index++) {
    //         if (newArr.children[index].route === url) {
    //           this.childList = newArr.children[index].children
    //           this.childName = newArr.route
    //           break
    //         }
    //       }
    //     }
    //   }
    //   try {
    //     this.menuOpen(this.childName, this.childList)
    //   } catch (error) {
    //     this.router.navigateByUrl['/dev']
    //   }
    // }
  }
}
