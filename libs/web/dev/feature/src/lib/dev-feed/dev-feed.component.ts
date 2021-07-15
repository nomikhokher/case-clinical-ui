import { Component } from '@angular/core'
import { DevFeedStore } from './dev-feed.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="my-8">
        <ui-preview
          [component_props]="[{ name: 'feedsListing', value: feedsListing }]"
          [code]="codePreview[0]"
          [title]="vm.config.headerTitle"
          [githubURL]="vm.config.githubURL"
          [directory]="vm.config.directory"
          [breadcrumbs]="vm.config.breadcrumbs"
          [component_outputs]="vm.config.component_outputs"
          [component_inputs]="vm.config.component_inputs"
        >
          <ui-feed [feedsListing]="vm.config.items.feedsListing"></ui-feed>
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
      img:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
      icon: 'user',
      size: 'lg',
      iconClass: 'bg-gray-400',
    },
    {
      id: 2,
      heading: 'Applied to',
      title: 'Front End',
      time: 'set, friday 2pm',
      img:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
      icon: 'thumb_up',
      size: 'lg',
      iconClass: 'bg-blue-500',
    },
  ]`,
  ]
}
