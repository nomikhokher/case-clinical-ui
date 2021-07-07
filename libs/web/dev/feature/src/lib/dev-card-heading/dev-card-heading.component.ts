import { Component } from '@angular/core'
import { DevCardHeadingStore } from './dev-card-heading.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [code]="codePreview[0]"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-card-heading
          [sectionToggle]="false"
          [profile]="vm.items.profile"
          [buttons]="vm.items.buttons"
        ></ui-card-heading>
      </ui-preview>
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
    </ng-container>
  `,
  providers: [DevCardHeadingStore],
})
export class DevCardHeadingComponent {
  readonly vm$ = this.store.vm$

  public codePreview = [
    `import { WebUiCardHeadingModule } from '@schema-driven/web/ui/card-heading'\n\n <ui-card-heading [sectionToggle]="false" [profile]="vm.items.profile" [buttons]="vm.items.buttons"></ui-card-heading>`,
  ]

  constructor(private readonly store: DevCardHeadingStore) {}
}
