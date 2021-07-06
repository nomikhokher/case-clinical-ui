import { Component } from '@angular/core'
import { DevPageHeadingsStore } from './dev-page-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="'Page Headings'"
        [directory]="directory"
        [component_props]="[
          { name: 'buttons', value: buttons },
          { name: 'lowerSubHeadings', value: lowerSubHeadings },
          { name: 'upperSubHeadings', value: upperSubHeadings },
        ]"
        [code]="codePreview[0]"
      >
        <ng-template #headerControls>
          <ng-container>
            <ui-button label="Gray" type="button" color="gray"></ui-button>
          </ng-container>
        </ng-template>
        <div class="bg-white rounded-xl px-8 shadow">
          <ui-page-header
            [title]="config.title"
            [meta]="config.meta"
            [controlsTemplate]="headerControls"
            [imgSource]="
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            "
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

  directory = 'libs/web/dev/feature/src/lib/dev-page-headings/dev-page-headings.component.ts'

  config = {
    title: 'Example Title',
    meta: [
      { label: 'Jobs', icon: 'briefcase' },
      { label: 'Remote', icon: 'locationMarker' },
      { label: '$120k – $140k', icon: 'currencyDollar' },
    ],
    controls: [
      {
        icon: 'chevronDown',
        text: 'More',
        color: 'gray',
      },
      {
        icon: 'link',
        text: 'View',
        color: 'gray',
      },
      {
        icon: 'pencil',
        text: 'Edit',
        color: 'gray',
      },
      {
        icon: 'check',
        text: 'Publish',
        color: 'indigo',
      },
    ],
  }

  public codePreview = [
    `import { WebUiPageHeadingsModule } from '@schema-driven/web/ui/page-headings' \n\n
    <ui-page-headings [upperSubHeadings]="upperSubHeadings" [lowerSubHeadings]="lowerSubHeadings" [buttons]="buttons"></ui-page-headings> \n\nupperSubHeadings=[
      {
        text: 'Jobs',
      },
      {
        text: 'Engineering',
      },
      {
        text: 'Back End Developer',
      },
  ]\n\nlowerSubHeadings=[
    {
      text: 'Full-time',
      icon: 'briefcase',
    },
    {
      text: 'Remote',
      icon: 'locationMarker',
    },
    {
      text: '$120k – $140k',
      icon: 'currencyDollar',
    },
    {
      text: 'Closing on January 9, 2020',
      icon: 'calendar',
    },
  ]\n\n
  buttons=[
    {
      icon: 'chevronDown',
      text: 'More',
      color: 'gray',
    },
    {
      icon: 'link',
      text: 'View',
      color: 'gray',
    },
    {
      icon: 'pencil',
      text: 'Edit',
      color: 'gray',
    },
    {
      icon: 'check',
      text: 'Publish',
      color: 'indigo',
    },
]
  `,
  ]
}
