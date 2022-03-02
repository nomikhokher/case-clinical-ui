import { Component } from '@angular/core'
import { DevNotificationListStore } from './dev-notification-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-notification-list-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-notification-list></ui-notification-list>
      </ui-notification-list-preview>
    </ng-container>
  `,
  providers: [DevNotificationListStore],
})
export class DevNotificationListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevNotificationListStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiNotificationListModule } from '@schema-driven/web/ui/notification-list' \n
<ui-notification-list></ui-notification-list>
         \n
        `,
      ]
    })
  }
}
