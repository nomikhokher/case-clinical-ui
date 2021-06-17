import { Component } from '@angular/core'
import { DevFeedStore } from './dev-feed.store'

type FeedsLists = {
  id: number
  heading: string
  title: string
  time: string
  icon: string
  size: string
  iconClass: string
}

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <br />
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-feed/dev-feed.component.ts
      </code>
      <div class="my-8">
        <ui-preview [component_props]="[{ name: 'feedsListing', value: feedsListing }]" [code]="codePreview[0]">
          <ui-feed [feedsListing]="feedsListing"></ui-feed>
        </ui-preview>
      </div>
    </ng-container>
  `,
  providers: [DevFeedStore],
})
export class DevFeedComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevFeedStore) {}

  public codePreview = [
    `import { WebUiFeedModule } from '@schema-driven/web/ui/feed' \n\n <ui-feed [feedsListing]="feedsListing"></ui-feed> \n\nfeedsListing=[
    {
      id: 1,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'user',
      size: 'lg',
      iconClass: 'bg-gray-400',
    },
    {
      id: 2,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'thumb_up',
      size: 'lg',
      iconClass: 'bg-blue-500',
    },
    {
      id: 3,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'check',
      size: 'lg',
      iconClass: 'bg-green-500',
    },
    {
      id: 4,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'thumb_up',
      size: 'lg',
      iconClass: 'bg-blue-500',
    },
    {
      id: 5,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'check',
      size: 'lg',
      iconClass: 'bg-green-500',
    },
  ]`,
  ]

  public feedsListing: FeedsLists[] = [
    {
      id: 1,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'user',
      size: 'lg',
      iconClass: 'bg-gray-400',
    },
    {
      id: 2,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'thumb_up',
      size: 'lg',
      iconClass: 'bg-blue-500',
    },
    {
      id: 3,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'check',
      size: 'lg',
      iconClass: 'bg-green-500',
    },
    {
      id: 4,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'thumb_up',
      size: 'lg',
      iconClass: 'bg-blue-500',
    },
    {
      id: 5,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      icon: 'check',
      size: 'lg',
      iconClass: 'bg-green-500',
    },
  ]
}
