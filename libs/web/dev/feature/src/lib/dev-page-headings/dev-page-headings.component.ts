import { Component } from '@angular/core'
import { DevPageHeadingsStore } from './dev-page-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-page-headings/dev-page-headings.component.ts
      </code>
      <ui-preview
        [title]="'Page Headings'"
        [component_props]="[
          { name: 'buttons', value: buttons },
          { name: 'lowerSubHeadings', value: lowerSubHeadings },
          { name: 'upperSubHeadings', value: upperSubHeadings },
        ]"
        [code]="codePreview[0]"
      >
        <ui-page-header heading="Example Title"></ui-page-header>
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

  public upperSubHeadings = [
    {
      text: 'Jobs',
    },
    {
      text: 'Engineering',
    },
    {
      text: 'Back End Developer',
    },
  ]

  public buttons = [
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

  public lowerSubHeadings = [
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
  ]
}
