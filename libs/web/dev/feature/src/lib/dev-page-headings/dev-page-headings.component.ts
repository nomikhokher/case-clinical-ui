import { Component } from '@angular/core'
import { DevPageHeadingsStore } from './dev-page-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [code]="codePreview[0]"
      >
        <ng-template #headerControls>
          <ng-container>
            <ui-button label="Gray" type="button" color="gray"></ui-button>
          </ng-container>
        </ng-template>
        <div class="bg-white rounded-xl px-8 shadow">
          <ui-page-header
            [title]="vm.items.config.title"
            [meta]="vm.items.config.meta"
            [controlsTemplate]="vm.items.headerControls"
          ></ui-page-header>
        </div>

        <!-- <ui-page-headings
          [headingTitle]="'Back End Developer'"
          [buttons]="buttons"
          [lowerSubHeadings]="lowerSubHeadings"
          [upperSubHeadings]="upperSubHeadings"
        >
        </ui-page-headings> -->
      </ui-preview>

      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
    </ng-container>
  `,
  providers: [DevPageHeadingsStore],
})
export class DevPageHeadingsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPageHeadingsStore) {}

  public codePreview = [
    `import { WebUiPageHeadingsModule } from '@schema-driven/web/ui/page-headings' \n\n
    <ui-page-header
    [title]="vm.items.config.title"
    [meta]="vm.items.config.meta"
    [controlsTemplate]="vm.items.headerControls"
  ></ui-page-header>
  `,
  ]
}
