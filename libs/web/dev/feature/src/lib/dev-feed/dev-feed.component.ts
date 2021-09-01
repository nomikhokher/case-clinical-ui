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
          [codeObj]="vm.config.items"
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

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFeedModule } from '@schema-driven/web/ui/feed'
        \n\n
        <ui-feed [feedsListing]="vm.config.items.feedsListing"></ui-feed>
     \n\n
        feedsListing = ${JSON.stringify(result.config.items.feedsListing, null, '\t')}\n
      `,
      ]
    })
  }
}
