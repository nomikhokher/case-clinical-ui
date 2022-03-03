import { Component } from '@angular/core'
import { DevMobileNotificationListStore } from './dev-mobile-notification-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-mobile-notification-list></ui-mobile-notification-list>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileNotificationListStore],
})
export class DevMobileNotificationListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNotificationListStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileNotificationListModule } from '@schema-driven/web/ui/mobile-notification-list' \n
<ui-mobile-notification-list></ui-mobile-notification-list>
         \n\n
        `,
      ]
    })
  }
}
