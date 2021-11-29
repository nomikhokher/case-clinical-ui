import { Component } from '@angular/core'
import { DevUserBadgeStore } from './dev-user-badge.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-user-badge [userData]="vm.config.items.userData" (onClicked)="onUserClicked($event)"></ui-user-badge>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevUserBadgeStore],
})
export class DevUserBadgeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevUserBadgeStore) {}
  public codePreview
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import {WebUiUserBadgeModule} from '@schema-driven/web/ui/user-badge' \n\n
        <ui-user-badge [userData]="vm.config.items.userData" (onClicked)="onUserClicked($event)"></ui-user-badge>
         \n\n
        
        userData = ${JSON.stringify(result.config.items.userData, null, '\t')}
        `,
      ]
    })
  }
  onUserClicked(data: string): void {
    alert(data)
  }
}
