import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'ui-main-page',
  template: `
    <div class="flex-auto ">
      <div class="max-w-container mx-auto px-20 sm:px-6 lg:px-28 pt-16 pb-24 space-y-8">
        <ng-container *ngIf="!menuList">
          <section class="flex-1 focus:outline-none" tabindex="0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <nav class="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
                <a [routerLink]="['/dev']" (click)="menuList = true" class="hover:text-gray-900">
                  {{ links[0]?.heading }}
                </a>
                <svg width="24" height="24" fill="none" class="flex-none text-gray-300">
                  <path
                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a
                  [routerLink]="['/dev']"
                  aria-current="page"
                  class="truncate hover:text-gray-900"
                  (click)="menuList = true"
                  *ngIf="childName"
                >
                  {{ childName }}
                </a>
              </nav>
              <h1 class="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">{{ subName }}</h1>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div class="rounded-lg">
                  <ng-content></ng-content>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </section>
        </ng-container>
        <ng-container *ngIf="menuList">
          <ng-container *ngFor="let link of links">
            <section id="product-marketing" class="divide-y divide-gray-200">
              <header class="pb-6">
                <h2 class="text-2xl font-extrabold text-gray-900">{{ link.heading }}</h2>
                <p class="text-sm text-gray-500 mt-2">
                  {{ link.title }}
                </p>
              </header>
              <div
                id="product-marketing-sections"
                class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6"
                *ngFor="let child of link.childs"
              >
                <h3 class="text-gray-900 font-semibold col-span-3 xl:col-span-1">{{ child.name }}</h3>
                <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                  <a
                    *ngFor="let children of child.childs"
                    [routerLink]="children.path"
                    class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5"
                    (click)="menuOpen(child.name, children.childs)"
                  >
                    <figure>
                      <div class="relative bg-gray-100 pt-[50%] overflow-hidden">
                        <div
                          class="w-full h-full rounded-t-lg overflow-hidden group-hover:filter group-hover:blur-[6px] transition-all duration-300"
                        >
                          <img src="{{ children.img }}" alt="not found" class="w-full h-full" />
                        </div>
                        <div
                          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 inset-0 flex items-center justify-center text-sm text-gray-900 font-medium"
                        >
                          See all
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="ml-2">
                            <circle
                              cx="10"
                              cy="10"
                              r="7.25"
                              stroke="#111827"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></circle>
                            <path
                              d="M12.25 11.25V7.75H8.75"
                              stroke="#111827"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 8L7.75 12.25"
                              stroke="#111827"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <figcaption class="py-3 px-4">
                        <p class="text-sm font-medium text-gray-900 mb-1">{{ children.label }}</p>
                        <p class="text-xs font-medium text-gray-500">components</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </section>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
})
export class WebUiMainPageComponent {
  @Input() links: WebUiSidebarPageLink[] = []

  public childName: string

  public menuList: boolean = true

  public subName: string

  public childList: any

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url) {
      const url = this.router.url.split('/')[this.router.url.split('/').length - 1]
      this.router.navigateByUrl[url]
      for (const iterator of this.links) {
        for (const newArr of iterator.childs) {
          for (let index = 0; index < newArr.childs.length; index++) {
            if (newArr.childs[index].path === url) {
              this.childList = newArr.childs[index].childs
              this.childName = newArr.name
              break
            }
          }
        }
      }
      try {
        this.menuOpen(this.childName, this.childList)
      } catch (error) {
        this.router.navigateByUrl['/dev']
      }
    }
  }

  menuOpen(label: string, arr: any): void {
    this.childName = label
    this.subName = arr[0].name
    this.menuList = !this.menuList
  }
}

export interface WebUiSidebarPageLink {
  heading: string
  title: string
  childs: [
    {
      name: string
      childs: [
        {
          label: string
          path: string
          img: string
          childs: [
            {
              name?: string
            },
          ]
        },
      ]
    },
  ]
}
