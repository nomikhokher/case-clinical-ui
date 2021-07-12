import { Component } from '@angular/core'
import { DevDescriptionListStore } from './dev-description-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-description-list/dev-description-list.component.ts
      </code>

      <!-- INSERT YOUR UI-COMPONENT HERE  -->

      <ui-preview
        [component_props]="[{ name: 'dataListing', value: dataListing }]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-description-list
          [data]="vm.config.items.data"
          [tagLine]="vm.config.items.tagLine"
          [formTitle]="vm.config.items.formTitle"
          [background]="vm.config.items.background"
          showIcon="vm.config.items.showIcon"
        >
        </ui-description-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDescriptionListStore],
})
export class DevDescriptionListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDescriptionListStore) {}

  public codePreview = [
    `import { WebUiDescriptionListModule } from '@schema-driven/web/ui/description-list' \n\n <ui-feed [dataListing]="dataListing"></ui-feed> \n\ndataListing=[
      {
        title : "Fullname",
        value : "Margot Foster"
      },
      {
        title : "Application For",
        value : "Backend Developer"
      },
      {
        title : "Email address",
        value : "margotfoster@example.com"
      },
      {
        title : "Salary expectation",
        value : "$120,000"
      },
      {
        title : "About",
        value : "ugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
      },
      {
        title : "Attachments",
        value : [
          'resume_back_end_developer.pdf',
          'coverletter_back_end_developer.pdf'
        ],
        type : 'attachment'
      },
  ]`,
  ]
}
