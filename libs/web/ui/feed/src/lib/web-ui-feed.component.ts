import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-feed',
  template: `
    <!-- Feeds simple with icons -->

    <div class="flow-root">
      <ul class="-mb-8">
        <li *ngFor="let list of feedsListing; let i = inex; let last = last">
          <div class="relative pb-8">
            <span *ngIf="!last" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
            <div class="relative flex space-x-3">
              <div>
                <span
                  class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-{{
                    list.iconClass
                  }}-500"
                >
                  <ui-icon icon="{{ list.icon }}" size="{{ list.size }}" class="w-6 h-6"></ui-icon>
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    {{ list.heading }}
                    <a href="#" class="font-medium text-gray-900 dark:text-gray-100">{{ list.title }}</a>
                  </p>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-300">
                  <time datetime="2020-09-20">{{ list.time }}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- Feeds Stacked with avatars -->

    <div class="my-10">
      <ul class="divide-y divide-gray-200">
        <li class="py-4" *ngFor="let list of feedsListing; let i = inex">
          <div class="flex space-x-3">
            <img *ngIf="list.img" class="h-10 w-10 rounded-full" src="{{ list.img }}" alt="{{ list.img }}" />
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium dark:text-gray-100">{{ list.heading }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-300">{{ list.time }}</p>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-300">{{ list.title }}</p>
            </div>
          </div>
        </li>

        <!-- More items... -->
      </ul>
    </div>
  `,
})
export class WebUiFeedComponent {
  @Input() feedsListing: FeedsLists[]
}

interface FeedsLists {
  id?: number
  heading?: string
  title?: string
  time?: string
  img?: string
  icon?: string
  size?: string
  iconClass?: string
}
