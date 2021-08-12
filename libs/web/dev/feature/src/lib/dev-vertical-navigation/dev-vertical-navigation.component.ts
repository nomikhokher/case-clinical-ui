import { Component } from '@angular/core'
import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [githubURL]="vm.githubURL"
        [component_inputs]="vm.component_inputs"
        [codeObj]="vm.items"
        [code]="codePreview[0]"
      >
        <ui-vertical-navigation [links]="vm.items.links"></ui-vertical-navigation
      ></ui-preview>
    </ng-container>
  `,
  providers: [DevVerticalNavigationStore],
})
export class DevVerticalNavigationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevVerticalNavigationStore) {}
  public codePreview = [
    `import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'\n\n
    <ui-vertical-navigation [links]="links"></ui-vertical-navigation\n
    links = [
      { icon: 'home', label: 'Dashboard', route: '.', badge: 5 },
      { icon: 'users', label: 'Team', route: 'team', badge: 12 },
      { icon: 'briefcase', route: 'team', label: 'Projects' },
      { icon: 'calendar', route: 'calendar', label: 'Calendar' },
      { icon: 'document', route: 'document', label: 'Document' },
      { icon: 'report', route: 'report', label: 'Report', badge: 20 },
    ],
    `,
  ]
}
